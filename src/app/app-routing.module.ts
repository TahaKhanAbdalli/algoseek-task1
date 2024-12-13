import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ActivityTimelineComponent } from "./components/activity-list/activity-timeline.component";

const routes: Routes = [
  { path: '', component: ActivityTimelineComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
