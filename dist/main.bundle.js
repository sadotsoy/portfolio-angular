webpackJsonp([0,3],{

/***/ 408:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 408;


/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(522);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/main.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(688),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/app.component.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sadot_sadot_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__left_bar_left_bar_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__body_body_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sadot_sadot_component__["a" /* SadotComponent */],
                __WEBPACK_IMPORTED_MODULE_7__left_bar_left_bar_component__["a" /* LeftBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__body_body_component__["a" /* BodyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/app.module.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__(689),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], BodyComponent);
    return BodyComponent;
}());
//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/body.component.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeftBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftBarComponent = (function () {
    function LeftBarComponent() {
    }
    LeftBarComponent.prototype.ngOnInit = function () {
    };
    LeftBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-left-bar',
            template: __webpack_require__(690),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], LeftBarComponent);
    return LeftBarComponent;
}());
//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/left-bar.component.js.map

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__(691),
            styles: [__webpack_require__(686)],
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/nav-bar.component.js.map

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SadotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SadotComponent = (function () {
    function SadotComponent() {
    }
    SadotComponent.prototype.ngOnInit = function () {
    };
    SadotComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-sadot',
            template: __webpack_require__(692),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], SadotComponent);
    return SadotComponent;
}());
//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/sadot.component.js.map

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/environment.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/developer/Documents/Develop/iTexico/portafolio-angular/src/polyfills.js.map

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 685:
/***/ function(module, exports) {

module.exports = "/*\n    Extras... FONTS ICONS, ETC\n*/\n\n@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');\n\n/*\n    WORLD!\n*/\n\n* {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n\n/*\n    END-WORLD\n*/\n\n\n/*\n    left-bar.component.html\n*/\n\n.left-bar {\n  position: absolute;\n  top: 5%;\n  left: 0%;\n  height: 95%;\n  width: 10%;\n  background-color: #F57C00;\n  border-top: 2px solid black;\n  border-right: 5px solid black;\n}\n\n.header {\n  position: absolute;\n  top: 0%;\n  left: 23%;\n  border-bottom: 2px solid black;\n}\n\n.github {\n  position: absolute;\n  top: 10%;\n  left: 33%;\n  font-size: 60px;\n  text-decoration: none;\n  color: black;\n}\n\n.github:hover {\n  color: #FFAB40;\n}\n\n.facebook {\n  position: absolute;\n  top: 22%;\n  left: 35%;\n  font-size: 60px;\n  text-decoration: none;\n  color: black;\n}\n\n.facebook:hover {\n  color: #FFAB40;\n}\n\n.mail{\n    position: absolute;\n    top: 34%;\n    left: 30%;\n    font-size: 60px;\n    text-decoration: none;\n    color: black;\n}\n.mail:hover {\n    color: #FFAB40;\n}\n/*\n    </ left-bar.component.html\n*/\n"

/***/ },

/***/ 686:
/***/ function(module, exports) {

module.exports = "/*\n    Extras... FONTS ICONS, ETC\n*/\n\n@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');\n\n/*\n    WORLD!\n*/\n\n* {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n\n/*\n    END-WORLD\n*/\n\n\n/*\n    nav-bar.component.html\n*/\n\n.navbar {\n  position: absolute;\n  background-color: #FF9800;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 5%;\n}\n\n#develop {\n  position: absolute;\n  color: black;\n  font-size: 25px;\n  top: 20%;\n  left: 5%;\n}\n.name {\n    position: relative;\n    color: black;\n    top: -5%;\n    left: 10%;\n    width: 12.5%;\n}\n.about {\n  position: absolute;\n  text-decoration: none;\n  color: black;\n  top: 28%;\n  left: 25%;\n  border-bottom: 2px solid black;\n}\n\n.contact {\n  position: absolute;\n  text-decoration: none;\n  color: black;\n  top: 28%;\n  left: 30%;\n  border-bottom: 2px solid black;\n}\n\n.about:hover {\n    border: none;\n}\n.contact:hover {\n    border: none;\n}\n\n/*\n    </ nav-bar.component.html\n*/\n"

/***/ },

/***/ 687:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 688:
/***/ function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title></title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n\n<body>\n  <div>\n    <!--<app-nav-bar></app-nav-bar>\n    <app-left-bar></app-left-bar>-->\n    <app-sadot></app-sadot>\n  </div>\n</body>\n\n</html>\n"

/***/ },

/***/ 689:
/***/ function(module, exports) {

module.exports = "<p>\n  body works!\n</p>\n"

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title></title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"../../../assets/font-awesome-4.7.0/css/font-awesome.min.css\">\n</head>\n\n<body>\n  <div class=\"left-bar\">\n    <h1 class=\"header\">SOCIAL</h1>\n    <a href=\"https://github.com/SadotCorts\" target=\"_blank\" class= \"github\" ><i class=\"fa fa-github\"></i></a>\n    <a href=\"https://facebook.com/SadotCorts\" target=\"_blank\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n    <a href=\"mailto:sadotcortes@scoorm.me\" class=\"mail\"><i class=\"fa fa-envelope\"></i></a>\n  </div>\n</body>\n\n</html>\n"

/***/ },

/***/ 691:
/***/ function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title></title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"../../../assets/font-awesome-4.7.0/css/font-awesome.min.css\">\n</head>\n\n<body>\n  <div class=\"navbar\">\n    <i id=\"develop\" class=\"fa fa-connectdevelop\" aria-hidden=\"true\"></i>\n    <p class=\"name\">Sadot Maximiliano Cortes Marquez</p>\n    <a class=\"about\" href=\"\">About</a>\n    <a class=\"contact\" href=\"\">Contact</a>\n  </div>\n</body>\n\n</html>\n"

/***/ },

/***/ 692:
/***/ function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title></title>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n\n<body>\n  <ngb-carousel>\n    <template ngbSlide>\n      <img src=\"http://lorempixel.com/900/500?r=1\" alt=\"Random first slide\">\n      <div class=\"carousel-caption\">\n        <h3>First slide label</h3>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </template>\n    <template ngbSlide>\n      <img src=\"http://lorempixel.com/900/500?r=2\" alt=\"Random second slide\">\n      <div class=\"carousel-caption\">\n        <h3>Second slide label</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </template>\n    <template ngbSlide>\n      <img src=\"http://lorempixel.com/900/500?r=3\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </template>\n  </ngb-carousel>\n</body>\n\n</html>\n"

/***/ },

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(409);


/***/ }

},[714]);
//# sourceMappingURL=main.bundle.map