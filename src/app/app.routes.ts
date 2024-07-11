import { Routes } from '@angular/router';
import {CreateEventPageComponent} from "./pages/create-event-page/create-event-page.component";
import {SchedulePageComponent} from "./pages/schedule-page/schedule-page.component";

export const routes: Routes = [
  {path: 'create-event', component: CreateEventPageComponent},
  {path: 'schedule-page', component: SchedulePageComponent},
];
