import {Injectable} from "@angular/core";
import * as convert from 'xml-js';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ApplicationListService {
    constructor(private http: HttpClient) { }

    getApplications(pageNumber: number): Observable<any> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'text/xml; charset=utf-8')
            .set('SOAPAction', 'http://www.rightcode.com/mtc/event-application/EventApplicationListRequest');

        const body = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:even="http://www.rightcode.com/mtc/event-application">
        <soapenv:Header/>
        <soapenv:Body>
          <even:EventApplicationListRequest>
            <even:pageNumber>${pageNumber}</even:pageNumber>
            <even:filterProps>
<!--            <even:eventId>?</even:eventId>-->
<!--            <even:medicalWorkerId>?</even:medicalWorkerId>-->
<!--            <even:applicationStatus>?</even:applicationStatus>-->
<!--            <even:startDos>?</even:startDos>-->
<!--            <even:endDos>?</even:endDos>-->
            </even:filterProps>
          </even:EventApplicationListRequest>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
      // http://178.141.253.196:8110/ws
        return this.http.post('http://localhost:8080/ws/', body, { headers: headers, responseType: 'text' }).pipe(
            map((xml: string) => {
                const json = convert.xml2js(xml, { compact: true }) as any;
                const response = json['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns2:EventApplicationListResponse'];
                let applications = response['ns2:applications']['ns2:application'];
                if (!Array.isArray(applications)) {
                    applications = [applications];
                }
                applications = applications.map((app: any) => ({
                    dos: app.dos._text,
                    email: app.email._text,
                    typeEvent: app.event._text,
                    fullName: app.fullName._text,
                    medicalOrganization: app.medicalOrganization._text,
                    position: app.medicalPosition._text,
                    speciality: app.medicalSpeciality._text,
                    phone: app.phoneNumber._text,
                    status: app.status._text,
                    id: app.id._text,
                }));

                return {
                    applications,
                    totalPages: parseInt(response['ns2:totalPages']._text, 10),
                    totalElements: parseInt(response['ns2:totalElements']._text, 10),
                    pageSize: parseInt(response['ns2:pageSize']._text, 10),
                    pageNumber: parseInt(response['ns2:pageNumber']._text, 10),
                };
            })
        );
    }
}
