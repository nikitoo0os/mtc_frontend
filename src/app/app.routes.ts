import { Routes } from '@angular/router';
import {CreateEventPageComponent} from "./pages/create-event-page/create-event-page.component";
import {SchedulePageComponent} from "./pages/schedule-page/schedule-page.component";
import {ContactInformationPageComponent} from "./pages/contact-information-page/contact-information-page.component";
import {ApplicationsPageComponent} from "./pages/applications-page/applications-page.component";
import {EditSlotsPageComponent} from "./pages/edit-slots-page/edit-slots-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {CreateApplicationComponent} from "./pages/create-application/create-application.component";

export const routes: Routes = [
  {path: 'create-event', component: CreateEventPageComponent},
  {path: 'schedule-page', component: SchedulePageComponent},
  {path: 'edit-slot-page', component: EditSlotsPageComponent},
  {path: 'applications-page', component: ApplicationsPageComponent},
  {path: '', component: ContactInformationPageComponent},
  {path: 'create-application', component: CreateApplicationComponent},
  {path: 'login', component: LoginComponent}
];
