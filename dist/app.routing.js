"use strict";
var router_1 = require("@angular/router");
var home_1 = require("./home");
var about_1 = require("./about");
var link1_1 = require("./link1");
var link2_1 = require("./link2");
var dash_1 = require("./dash");
var user_1 = require("./user");
var product_1 = require("./product");
var product_analysis_1 = require("./product_analysis");
var appRoutes = [
    { path: 'app', component: dash_1.DashComponent,
        children: [
            { path: 'home', component: home_1.HomeComponent },
            { path: 'WishList', component: about_1.AboutComponent,
                children: [
                    { path: '', redirectTo: 'app/WishList/users_analysis', pathMatch: 'full' },
                    { path: 'users_analysis', component: link1_1.UserAnalysisComponent },
                    { path: 'productanalysis', component: product_analysis_1.ProductAnalysisComponent },
                    { path: 'Leaderboard', component: link2_1.LeaderBoardComponent,
                        children: [
                            { path: '', redirectTo: 'app/WishList/Leaderboard/users', pathMatch: 'full' },
                            { path: 'users', component: user_1.UserComponent },
                            { path: 'products', component: product_1.ProductComponent }
                        ] },
                ] },
        ] },
    { path: 'app/home', component: home_1.HomeComponent },
    { path: 'app', redirectTo: 'app/home' },
    { path: '', redirectTo: 'app/home', pathMatch: 'full' },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map