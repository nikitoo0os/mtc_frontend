import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NzInputDirective,
    NzButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  valueLogin: string = '';
  valuePassword: string = '';

}
