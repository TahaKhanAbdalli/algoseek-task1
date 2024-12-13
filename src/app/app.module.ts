import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityTimelineComponent } from './components/activity-list/activity-timeline.component';
import { LucideAngularModule, MessageCircle, Phone, Coffee, Users, Home, PillBottle, UserRound, ChevronDown } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    ActivityTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ MessageCircle, Phone, Coffee, Users, Home,PillBottle,UserRound,ChevronDown })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
