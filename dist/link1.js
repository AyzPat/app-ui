"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserAnalysisComponent = (function () {
    function UserAnalysisComponent() {
        this.color = 'praimry';
        this.mode = 'determinate';
        this.value1 = 50;
        this.value2 = 40;
        this.value3 = 99;
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Users' },
        ];
        this.lineChartLabels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
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
    UserAnalysisComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    UserAnalysisComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return UserAnalysisComponent;
}());
UserAnalysisComponent = __decorate([
    core_1.Component({
        selector: 'link1',
        templateUrl: 'app/useranalysis.html',
    }),
    __metadata("design:paramtypes", [])
], UserAnalysisComponent);
exports.UserAnalysisComponent = UserAnalysisComponent;
//# sourceMappingURL=link1.js.map