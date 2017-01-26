"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_charts_1 = require("ng2-charts");
var app_component_1 = require("./app.component");
var user_1 = require("./user");
var product_1 = require("./product");
var progress_circle_1 = require("@angular2-material/progress-circle");
var card_1 = require("@angular2-material/card");
var home_1 = require("./home");
var product_analysis_1 = require("./product_analysis");
var about_1 = require("./about");
var app_routing_1 = require("./app.routing");
var link1_1 = require("./link1");
var link2_1 = require("./link2");
var dash_1 = require("./dash");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [app_routing_1.routing, app_routing_1.routing, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule, http_1.HttpModule, ng2_charts_1.ChartsModule, progress_circle_1.MdProgressCircleModule, card_1.MdCardModule],
        declarations: [app_component_1.AppComponent, home_1.HomeComponent, about_1.AboutComponent, link1_1.UserAnalysisComponent, link2_1.LeaderBoardComponent, dash_1.DashComponent, user_1.UserComponent, product_1.ProductComponent, product_analysis_1.ProductAnalysisComponent],
        providers: [app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map