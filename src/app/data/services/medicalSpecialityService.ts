import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as xml2js from 'xml-js';
import {IEventType} from "../interfaces/IEvenType";
import {IMedicalSpeciality} from "../interfaces/IMedicalSpeciality";

@Injectable({
    providedIn: 'root'
})
export class MedicalSpecialityService {
    // http://178.141.253.196:8110/ws
    private readonly url = 'http://localhost:8080/ws/';

    constructor(private http: HttpClient) { }

    getMedicalSpecialities(name: string): Observable<IMedicalSpeciality[]> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'text/xml; charset=utf-8')
            .set('SOAPAction', 'http://www.rightcode.com/mtc/event-type/MedicalSpecialityListRequest');

        const body = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:med="http://www.rightcode.com/mtc/medical-speciality">
           <soapenv:Header/>
           <soapenv:Body>
              <med:MedicalSpecialityListRequest>
                 <med:name>${name}</med:name>
              </med:MedicalSpecialityListRequest>
           </soapenv:Body>
        </soapenv:Envelope>
        `;
        return this.http.post(this.url, body, {headers: headers, responseType: 'text'}).pipe(
            map(response => this.parseXml(response))
        );
    }

    private parseXml(xml: string): any {
        const response: any = xml2js.xml2js(xml, { compact: true });
        const medicalSpecialities = response['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns2:MedicalSpecialityListResponse']['ns2:specialities']['ns2:speciality'];
        return medicalSpecialities.map((raw: any) => {
            const medicalSpeciality: IMedicalSpeciality = {
                id: raw['ns2:id']._text,
                name: raw['ns2:name']._text,
            };

            return medicalSpeciality;
        });
    }
}
