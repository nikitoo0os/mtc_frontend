import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { map } from 'rxjs/operators';
import * as xml2js from 'xml-js';
import {ConfigService} from "./ConfigService";

@Injectable({
  providedIn: 'root'
})
export class ServiceFilterSchedulePage {
  // 'http://localhost:8080/ws/';
  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {}

  getMedicalSpecialities(name: string): Observable<any> {
    const headers = new HttpHeaders()
        .set('Content-Type', 'text/xml; charset=utf-8')
        .set('SOAPAction', 'http://www.rightcode.com/mtc/medical-speciality/MedicalSpecialityListRequest');

    const body = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:med="http://www.rightcode.com/mtc/medical-speciality">
        <soapenv:Header/>
        <soapenv:Body>
          <med:MedicalSpecialityListRequest>
            <med:name>${name}</med:name>
          </med:MedicalSpecialityListRequest>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    return this.http.post(this.configService.apiUrl, body, { headers: headers, responseType: 'text' }).pipe(
        tap(response => console.log('Response:', response)), // Отладка ответа
        map(response => this.parseXml(response))
    );
  }

  private parseXml(xml: string): any {
    const result: any = xml2js.xml2js(xml, { compact: true });
    return result['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns2:MedicalSpecialityListResponse']['ns2:specialities']['ns2:speciality'];
  }
}
