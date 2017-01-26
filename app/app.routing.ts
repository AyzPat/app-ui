import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

  

import { AboutComponent } from './about';
import { UserAnalysisComponent } from './link1';
import { LeaderBoardComponent } from './link2';

import { DashComponent } from './dash';

import { UserComponent } from './user';
import { ProductComponent } from './product';
import { ProductAnalysisComponent } from './product_analysis';



const  appRoutes: Routes = [
 
 


{ path: 'app', component:DashComponent ,
children:[
  {path:'home',component:HomeComponent},
 
   { path: 'WishList', component: AboutComponent,
  children:[
{path:'',redirectTo:'app/WishList/users_analysis',pathMatch:'full'},
{path:'users_analysis',component:UserAnalysisComponent},
{path:'productanalysis',component:ProductAnalysisComponent},
{path:'Leaderboard',component:LeaderBoardComponent,
children:[
 {path:'',redirectTo:'app/WishList/Leaderboard/users',pathMatch:'full'}, 
{path:'users',component:UserComponent},
{path:'products',component:ProductComponent}
]},
]},




]},
 
  { path: 'app/home', component: HomeComponent  },
   
{path:'app', redirectTo:'app/home'},


  
   { path: '', redirectTo: 'app/home', pathMatch: 'full' },
   
  
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
