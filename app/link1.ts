    import {Component,Input} from '@angular/core'


@Component ({
    selector:'link1',
    templateUrl:'app/useranalysis.html'
   ,
  
})
export class UserAnalysisComponent{
 color = 'praimry';
  mode = 'determinate';
  value1 = 50;
  value2=40;
  value3=99  ;
   constructor(){} 
    public lineChartData:Array<any> = [
     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Users'},
    // {data: [2, 48, 40, 19, 86, 27, 90], label: 'Product'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat','Sun'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
       backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
       pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
    
   
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  // public randomize():void {
  //   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
  //     }
  //   }
  //   this.lineChartData = _lineChartData;
  // }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
    
