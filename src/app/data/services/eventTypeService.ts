import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as xml2js from 'xml-js';
import {IEventType} from "../interfaces/IEvenType";
import {ConfigService} from "./ConfigService";

@Injectable({
    providedIn: 'root'
})
export class EventTypeService {
    constructor(
      private http: HttpClient,
      private configService: ConfigService
    ) { }

    getEventTypes(): Observable<IEventType[]> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'text/xml; charset=utf-8')
            .set('SOAPAction', 'http://www.rightcode.com/mtc/event-type/getEventTypeRequest');

        const body = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
      xmlns:med="http://www.rightcode.com/mtc/event-type">
        <soapenv:Header/>
        <soapenv:Body>
          <med:getEventTypeRequest></med:getEventTypeRequest>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
        return this.http.post(this.configService.apiUrl, body, {headers: headers, responseType: 'text'}).pipe(
            map(response => this.parseXml(response))
        );
    }

    private parseXml(xml: string): any {
        const response: any = xml2js.xml2js(xml, { compact: true });
        const eventTypes = response['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns3:getEventTypeResponse']['eventTypes']['eventType'];

        return eventTypes.map((raw: any) => {
            const eventType: IEventType = {
                id: raw.id._text,
                acronym: raw.acronym._text,
                name: raw.name._text,
            };

            return eventType;
        });
    }
}
