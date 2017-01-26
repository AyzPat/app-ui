import {Component,Input} from '@angular/core'

import {ActivatedRoute} from '@angular/router'

@Component ({
    selector:'dash',
    templateUrl:'app/dash.html'
   
,
    
    })
    export class DashComponent{

 

    openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "4%";
}
    }
        
