import { NgModule} from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { UserComponent } from './user';
import { ProductComponent } from './product';
import{MdProgressCircleModule} from '@angular2-material/progress-circle';
import{MdCardModule} from '@angular2-material/card';

import {HomeComponent } from './home';
import{ProductAnalysisComponent} from './product_analysis'
import { AboutComponent } from './about';
import { routing, appRoutingProviders }  from './app.routing';

import {UserAnalysisComponent } from './link1';
import {LeaderBoardComponent } from './link2';
import {DashComponent} from './dash';

import { RouterModule } from '@angular/router';

@NgModule({
    imports:  [ routing, routing, BrowserModule, FormsModule,RouterModule , HttpModule,ChartsModule ,MdProgressCircleModule,MdCardModule],
    declarations: [ AppComponent, HomeComponent,AboutComponent,UserAnalysisComponent,LeaderBoardComponent,DashComponent,UserComponent,ProductComponent,ProductAnalysisComponent],
    providers: [ appRoutingProviders],
    bootstrap: [ AppComponent ]
})

export class AppModule { }