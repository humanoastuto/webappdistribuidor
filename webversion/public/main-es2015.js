(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>ABMODEL DELIVERY</span>\n    <button style = \"margin-left: 5px;\" mat-button color=\"accent\" routerLink=\"/mapa\">Mapa</button>\n    <button style = \"margin-left: 5px;\" mat-button color=\"accent\" routerLink=\"/proveedor\">Proveedores</button>\n    <button style = \"margin-left: 5px;\" mat-button color=\"accent\" routerLink=\"/vendedor\">Vendedores</button>\n    <button style = \"margin-left: 5px;\" mat-button color=\"accent\" routerLink=\"/producto\">Productos</button>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">track_changes</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mapa/mapa.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mapa/mapa.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n      <h1>{{ title }}</h1>\n      \n      <!-- this creates a google map on the page with the given lat/lng from -->\n      <!-- the component as the initial center of the map: -->\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\"\n      [latitude]=\"lat\"\n      [longitude]=\"lng\"\n      [zoom]=\"zoom\"\n      [disableDefaultUI]=\"false\"\n      [zoomControl]=\"false\"\n      (mapClick)=\"mapClicked($event)\"\n          >\n        <agm-marker\n        *ngFor=\"let m of markers; let i = index\"\n        (markerClick)=\"clickedMarker(m.label, i)\"\n        [latitude]=\"m.lat\"\n        [longitude]=\"m.lng\"\n        [label]=\"m.label\"\n        [iconUrl]=\"m.iconUrl\"\n        >\n          <agm-info-window>\n           <strong>{{m.label}}</strong>\n           {{m.lat}}\n           {{m.lng}}\n          </agm-info-window>\n        </agm-marker>\n      </agm-map>\n    \n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nuevoproveedor/nuevoproveedor.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nuevoproveedor/nuevoproveedor.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n \n    <h1 style=\"margin-top: 25px; text-align: center;\">\n      {{title}}\n    </h1>\n   \n    <mat-card class = \"example-card\">\n      <div class=\"row\" style=\"margin-top: 25px;\"  >\n      \n        <div class=\"col-md-6\" >\n          <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"prov\" placeholder=\"Proveedor\">\n        </div>\n        <div class=\"col-md-6\">\n          <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"cod\" placeholder=\"Codigo\">\n        </div>\n        <div class=\"col-md-6\">\n          <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"desc\" placeholder=\"Descripcion\">\n        </div>\n        <div class=\"col-md-6\">\n          <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"lat\" placeholder=\"Latitud\">\n        </div>\n        <div class=\"col-md-6\">\n          <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"long\" placeholder=\"Longitud\">\n        </div>\n        <div class=\"col-md-6\">\n          <button  mat-stroked-button type=\"button\" (click)=\"CreateRecord()\" [disabled]=\"!prov || !cod || !desc\" \n          class=\"btn btn-primary\" style = \"margin-top: 5px; background-color: azure; color:black;\" >+\n            Crear Proveedor</button>\n        </div>\n      </div>\n    </mat-card>\n</div>\n\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"\n      [latitude]=\"lat\"\n      [longitude]=\"lng\"\n      [zoom]=\"zoom\"\n      [disableDefaultUI]=\"false\"\n      [zoomControl]=\"false\"\n\n      >\n        <agm-marker\n        *ngFor=\"let m of proveedores\"\n        [latitude]=\"m.Latitud\"\n        [longitude]=\"m.Longitud\"\n        [label]=\"m.Proveedor\"\n        [markerDraggable]= \"false\"\n        [iconUrl]= \"'http://maps.google.com/mapfiles/ms/icons/red-dot.png'\"\n        >\n          <agm-info-window>\n           <strong>{{m.Proveedor}}</strong>\n           {{m.Latitud}}\n           {{m.Longitud}}\n\n          </agm-info-window>\n        </agm-marker>\n      </agm-map>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n \n  <h1 style=\"margin-top: 25px; text-align: center;\">\n    {{title}}\n  </h1>\n \n  <mat-card class = \"example-card\">\n    <div class=\"row\" style=\"margin-top: 25px;\"  >\n    \n      <div class=\"col-md-3\" >\n        <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"prov\" placeholder=\"Proveedor\">\n      </div>\n      <div class=\"col-md-3\">\n        <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"prod\" placeholder=\"Producto\">\n      </div>\n      <div class=\"col-md-3\">\n        <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"desc\" placeholder=\"Descripcion\">\n      </div>\n      <div class=\"col-md-3\">\n        <input style = \"margin-top: 5px; background-color: white; \" matInput type=\"text\" class=\"form-control\" [(ngModel)]=\"desc\" placeholder=\"Precio\">\n      </div>\n      <div class=\"col-md-3\">\n        <button  mat-stroked-button type=\"button\" (click)=\"CreateRecord()\" [disabled]=\"!prov || !prod || !desc\" \n        class=\"btn btn-primary\" style = \"margin-top: 5px; background-color: azure; color:black;\" >+\n          Crear Producto</button>\n      </div>\n    </div>\n  </mat-card>\n  \n  <mat-card class = \"example-card\">\n    <div class=\"row\" style=\"margin-top: 25px;\">\n      <div class=\"col-md-3\">\n        <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let item of productos\"> <!--for each item in productos-->\n          <mat-card class = \"example-card2\"> \n            <div class=\"card-body\" *ngIf=\"!item.isEdit; else elseBlock\">\n              \n              <h5 class=\"card-title\" >Proveedor: {{item.Proveedor}}</h5>\n              <mat-divider></mat-divider>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Producto: {{item.Producto}} </h6>\n              <mat-divider></mat-divider>\n              <p class=\"card-text\">Descripcion: {{item.Descripcion}}</p>\n              <mat-divider></mat-divider>              \n              <p class=\"card-text\">Precio: {{item.Precio}}</p>\n              <mat-divider></mat-divider>\n              <button mat-stroked-button style = \"margin-left: 30px; margin-top: 15px; background-color: white; color: red\" \n              type=\"button\" (click)=\"RemoveRecord(item.id)\" >\n                Delete</button>\n              <button mat-stroked-button style = \"margin-left: 30px; margin-top: 15px; background-color: white; color: #3f1aad\" \n              type=\"button\" (click)=\"EditRecord(item)\" >\n                Edit</button>\n            </div>\n          </mat-card>\n          <ng-template #elseBlock>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Edit</h5>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditProv\"\n                     placeholder=\"Editar Proveedor\">\n                  </div>\n                  <div class=\"col-md-12\">\n                    <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditProd\"\n                     placeholder=\"Editar Producto\">\n                  </div>\n                  <div class=\"col-md-12\">\n                    <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditDesc\"\n                     placeholder=\"Editar Descripcion\">\n                  </div>\n                  <div class=\"col-md-12\">\n                    <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditPrec\"\n                     placeholder=\"Editar Precio\">\n                  </div>\n                </div>\n              </div>\n              <button  mat-stroked-button style = \" margin-top: 15px; background-color: white; color: red\"\n               type=\"button\" (click)=\"item.isEdit = false\" >\n                Cancel</button>\n              <button  mat-stroked-button style = \"margin-left: 30px; margin-top: 15px; background-color: white; color: #3f1aad\"\n               type=\"button\"(click)=\"UpdateRecord(item)\" >\n                  Update</button>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </mat-card> \n \n \n</div>\n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/proveedor/proveedor.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proveedor/proveedor.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n \n        <h1 style=\"margin-top: 25px; text-align: center;\">\n          {{title}}\n        </h1>\n       \n      \n              <button  mat-stroked-button type=\"button\" routerLink=\"/nuevoproveedor\" \n              class=\"nav-item nav-link-edit\" style = \"margin-left: 200px; margin-top: 5px; background-color: azure; color:black;\" >+\n                Crear Proveedor</button>\n            \n        \n        <mat-card class = \"example-card\">\n          <div class=\"row\" style=\"margin-top: 25px;\">\n            <div class=\"col-md-3\">\n              <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let item of proveedores\"> <!--for each item in productos-->\n                <mat-card class = \"example-card2\"> \n                  <div class=\"card-body\" *ngIf=\"!item.isEdit; else elseBlock\">\n                    \n                    <h5 class=\"card-title\" >Proveedor: {{item.Proveedor}}</h5>\n                    <mat-divider></mat-divider>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">Codigo: {{item.Codigo}} </h6>\n                    <mat-divider></mat-divider>\n                    <p class=\"card-text\">Descripcion: {{item.Descripcion}}</p>\n                    <mat-divider></mat-divider>\n                    <h6 class=\"card-text\">Longitud: {{item.Longitud}}</h6>\n                    <mat-divider></mat-divider>\n                    <h6 class=\"card-text\">Latitud: {{item.Latitud}}</h6>\n                    <mat-divider></mat-divider>\n                    <button mat-stroked-button style = \"margin-left: 30px; margin-top: 15px; background-color: white; color: red\" \n                    type=\"button\" (click)=\"RemoveRecord(item.id)\" >\n                      Delete</button>\n                    <button mat-stroked-button style = \" margin-top: 15px;margin-left: 30px; background-color: white; color: #3f1aad\" \n                    type=\"button\" (click)=\"EditRecord(item)\" >\n                      Edit</button>\n\n                    \n                  </div>\n                </mat-card>\n                <ng-template #elseBlock>\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">Edit</h5>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditProv\"\n                           placeholder=\"Editar Proveedor\">\n                        </div>\n                        <div class=\"col-md-12\">\n                          <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditCod\"\n                           placeholder=\"Editar Codigo\">\n                        </div>\n                        <div class=\"col-md-12\">\n                          <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditDesc\"\n                           placeholder=\"Editar Descripcion\">\n                        </div>\n                        <div class=\"col-md-12\">\n                            <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditLng\"\n                             placeholder=\"Editar Longitud\">\n                        </div>\n                        <div class=\"col-md-12\">\n                            <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditLat\"\n                              placeholder=\"Editar Latitud\">\n                          </div>\n                      </div>\n                    </div>\n        \n                    <button  mat-stroked-button style = \" margin-top: 15px; background-color: white; color: red\"\n                     type=\"button\" (click)=\"item.isEdit = false\" >\n                      Cancel</button>\n      \n                    <button  mat-stroked-button style = \"margin-left: 30px; margin-top: 15px; background-color: white; color: #3f1aad\"\n                     type=\"button\"(click)=\"UpdateRecord(item)\" >\n                        Update</button>\n                  </div>\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </mat-card> \n       \n       \n      </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendedor/vendedor.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendedor/vendedor.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <mat-card class = \"example-card\">\n    <div class=\"authBlock\">\n      <h3>Sign Up</h3>\n      <form style =\"background-color: white;  width: 100%;\" class=\"example-form\" #form=\"ngForm\">\n        <mat-form-field class=\"example-full-width\">\n          <input style =\"background-color: white; width: 100%;\" matInput placeholder=\"Email\" value=\"\" #userEmail required [(ngModel)]=\"email\">\n        </mat-form-field>\n\n        <mat-form-field style =\"background-color: white;  width: 100%;\" class=\"example-full-width\">\n          <input style =\"background-color: white;  width: 100%;\" matInput placeholder=\"Contrasena\" value=\"\" #userPassword required [(ngModel)]=\"passrd\" >\n        </mat-form-field>\n\n        <mat-form-field style =\"background-color: white;  width: 100%;\" class=\"example-full-width\">\n          <input style =\"background-color: white;  width: 100%;\" matInput placeholder=\"Confirme contrasena\" value=\"\" #userCPassword required [(ngModel)]=\"cpassrd\" >\n        </mat-form-field>\n\n        <mat-form-field style =\"background-color: white;  width: 100%;\" class=\"example-full-width\">\n          <input style =\"background-color: white;  width: 100%;\" matInput placeholder=\"Cambio Email\" value=\"\" #userNewEmail required [(ngModel)]=\"newEmail\" >\n        </mat-form-field>\n\n        <mat-form-field style =\"background-color: white;  width: 100%;\" class=\"example-full-width\">\n          <input style =\"background-color: white;  width: 100%;\" matInput placeholder=\"Cambio pass\" value=\"\" #userNewPass required [(ngModel)]=\"newPass\" >\n        </mat-form-field>\n\n        <button style =\"background-color: white;  width: 100%;\" mat-button color=\"primary\" (click)=\"authenticationService.SignUp(userEmail.value, userPassword.value, userCPassword.value)\" (click)=\"CreateRecord()\">Registrar</button>\n        <button style =\"background-color: white;  width: 100%;\" mat-button color=\"primary\" (click)=\"authenticationService.delete(userEmail.value, userPassword.value, userCPassword.value)\">Borrar</button>\n        <button style =\"background-color: white;  width: 100%;\" mat-button color=\"primary\" (click)=\"authenticationService.update(userEmail.value, userPassword.value, userCPassword.value, userNewEmail.value, userNewPass.value)\">Actualizar</button>\n      </form>      \n    </div>\n  </mat-card>\n\n \n  <mat-card class = \"example-card\">\n    <div class=\"row\" >\n      <div class=\"col-md-3\">\n        <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let item of vendedores\"> <!--for each item in vendedores-->\n          <mat-card class = \"example-card2\"style=\"margin-top: 15px;\"> \n            <div class=\"card-body\" *ngIf=\"!item.isEdit; else elseBlock\"style=\"margin-top: 15px;\">\n              \n              <h5 class=\"card-title\" >Email: {{item.Email}}</h5>\n              <mat-divider></mat-divider>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Password: {{item.Password}} </h6>\n              <mat-divider></mat-divider>\n              <button mat-stroked-button style = \"margin-left: 30px; margin-top: 15px; background-color: white; color: red\" \n              type=\"button\" (click)=\"RemoveRecord(item.id)\">\n                Delete</button>\n              <button mat-stroked-button style = \"margin-left: 30px; margin-top: 15px; background-color: white; color: #3f1aad\" \n              type=\"button\" (click)=\"EditRecord(item)\" >\n                Edit</button>\n\n              \n            </div>\n          </mat-card>\n          <ng-template #elseBlock>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Edit</h5>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditEmail\"\n                     placeholder=\"Editar Email\">\n                  </div>\n                  <div class=\"col-md-12\">\n                    <input style = \"margin-top: 5px;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.EditPass\"\n                     placeholder=\"Editar Password\">\n                  </div>\n                </div>\n              </div>\n  \n              <button  mat-stroked-button style = \" margin-top: 15px; background-color: white; color: red\"\n               type=\"button\" (click)=\"item.isEdit = false\" >\n                Cancel</button>\n\n              <button  mat-stroked-button style = \"margin-left: 30px; margin-top: 15px; background-color: white; color: #3f1aad\"\n               type=\"button\"(click)=\"UpdateRecord(item)\" >\n                  Update</button>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </mat-card> \n \n\n  \n \n</div>\n ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapa/mapa.component */ "./src/app/mapa/mapa.component.ts");
/* harmony import */ var _proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proveedor/proveedor.component */ "./src/app/proveedor/proveedor.component.ts");
/* harmony import */ var _vendedor_vendedor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendedor/vendedor.component */ "./src/app/vendedor/vendedor.component.ts");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto/producto.component */ "./src/app/producto/producto.component.ts");
/* harmony import */ var _nuevoproveedor_nuevoproveedor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nuevoproveedor/nuevoproveedor.component */ "./src/app/nuevoproveedor/nuevoproveedor.component.ts");








const routes = [
    { path: '',
        redirectTo: '/mapa',
        pathMatch: 'full'
    },
    { path: 'mapa', component: _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_3__["MapaComponent"] },
    { path: 'proveedor', component: _proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_4__["ProveedorComponent"] },
    { path: 'vendedor', component: _vendedor_vendedor_component__WEBPACK_IMPORTED_MODULE_5__["VendedorComponent"] },
    { path: 'producto', component: _producto_producto_component__WEBPACK_IMPORTED_MODULE_6__["ProductoComponent"] },
    { path: 'nuevoproveedor', component: _nuevoproveedor_nuevoproveedor_component__WEBPACK_IMPORTED_MODULE_7__["NuevoproveedorComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ABMODEL Delivery Administration';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapa/mapa.component */ "./src/app/mapa/mapa.component.ts");
/* harmony import */ var _proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proveedor/proveedor.component */ "./src/app/proveedor/proveedor.component.ts");
/* harmony import */ var _vendedor_vendedor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendedor/vendedor.component */ "./src/app/vendedor/vendedor.component.ts");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./producto/producto.component */ "./src/app/producto/producto.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./firebase */ "./src/app/firebase.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _nuevoproveedor_nuevoproveedor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./nuevoproveedor/nuevoproveedor.component */ "./src/app/nuevoproveedor/nuevoproveedor.component.ts");



























//import { environment } from 'src/environments/environment';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_7__["MapaComponent"], _proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_8__["ProveedorComponent"], _vendedor_vendedor_component__WEBPACK_IMPORTED_MODULE_9__["VendedorComponent"], _producto_producto_component__WEBPACK_IMPORTED_MODULE_10__["ProductoComponent"], _nuevoproveedor_nuevoproveedor_component__WEBPACK_IMPORTED_MODULE_25__["NuevoproveedorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_firebase__WEBPACK_IMPORTED_MODULE_19__["default"]),
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_21__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCGpohYz9t6hsj10jqD-4S5T0ohPpuVfSQ'
            }),],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



let AuthenticationService = class AuthenticationService {
    constructor(afAuth // Inject Firebase auth service
    ) {
        this.afAuth = afAuth;
    }
    // Sign up with email/password
    SignUp(email, password, cpass) {
        if (password === cpass) {
            return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then((result) => {
                window.alert("You have been successfully registered!");
                console.log(result.user);
            }).catch((error) => {
                window.alert(error.message);
            });
        }
        else {
            window.alert("Contrasenas no iguales, introduzcalas de nuevo");
        }
    }
    delete(email, password, cpass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(password === cpass)) {
                return console.error("Las contrasenas son diferentes");
            }
            try {
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
                this.afAuth.auth.currentUser.delete();
                console.log("Borrado");
            }
            catch (error) {
                console.dir(error);
            }
        });
    }
    update(email, password, cpass, nuevoEmail, newPass) {
        if (!(password === cpass)) {
            return console.error("Las contrasenas son diferentes");
        }
        try {
            this.afAuth.auth.currentUser.updateEmail(nuevoEmail);
            this.afAuth.auth.currentUser.updatePassword(newPass);
            console.log("Borrado");
        }
        catch (error) {
            console.dir(error);
        }
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] // Inject Firebase auth service
     }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/crud.service.ts":
/*!*********************************!*\
  !*** ./src/app/crud.service.ts ***!
  \*********************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let CrudService = class CrudService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    create_NewProducto(record) {
        return this.firestore.collection('Productos').add(record);
    }
    read_Productos() {
        return this.firestore.collection('Productos').snapshotChanges();
    }
    update_Producto(recordID, record) {
        this.firestore.doc('Productos/' + recordID).update(record);
    }
    delete_Producto(record_id) {
        this.firestore.doc('Productos/' + record_id).delete();
    }
    create_NewProveedor(record) {
        return this.firestore.collection('Proveedores').add(record);
    }
    read_Proveedores() {
        return this.firestore.collection('Proveedores').snapshotChanges();
    }
    update_Proveedor(recordID, record) {
        this.firestore.doc('Proveedores/' + recordID).update(record);
    }
    delete_Proveedor(record_id) {
        this.firestore.doc('Proveedores/' + record_id).delete();
    }
    create_NewVendedor(record) {
        return this.firestore.collection('Vendedores').add(record);
    }
    read_Vendedor() {
        return this.firestore.collection('Vendedores').snapshotChanges();
    }
    update_Vendedor(recordID, record) {
        this.firestore.doc('Vendedores/' + recordID).update(record);
    }
    delete_Vendedor(record_id) {
        this.firestore.doc('Vendedores/' + record_id).delete();
    }
    read_Ventas() {
        return this.firestore.collection('Ventas').snapshotChanges();
    }
    read_Pedidos() {
        return this.firestore.collection('Pedidos').snapshotChanges();
    }
};
CrudService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CrudService);



/***/ }),

/***/ "./src/app/firebase.ts":
/*!*****************************!*\
  !*** ./src/app/firebase.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuG6Ap5Cuejt6vUdDk8HZpoW6aCxucWec",
    authDomain: "abmodel-delivery.firebaseapp.com",
    databaseURL: "https://abmodel-delivery.firebaseio.com",
    projectId: "abmodel-delivery",
    storageBucket: "abmodel-delivery.appspot.com",
    messagingSenderId: "245060249557",
    appId: "1:245060249557:web:c5da8390c1ce9f1fdaff5c",
    measurementId: "G-6SYXHN4E4M"
};
/* harmony default export */ __webpack_exports__["default"] = (firebaseConfig);


/***/ }),

/***/ "./src/app/mapa/mapa.component.css":
/*!*****************************************!*\
  !*** ./src/app/mapa/mapa.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    width: 100%;\n    height: 100%;\n}\n\n.example-card {\n    max-width: 1200px;\n    margin-top: 100px;\n    margin-bottom: 100px;\n    margin-right: 150px;\n    margin-left: 80px;\n  }\n\n.example-header-image {\n    background-size: cover;\n  }\n\n.example-icon {\n    padding: 0 14px;\n  }\n\n.example-spacer {\n    flex: 1 1 auto;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwYS9tYXBhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL21hcGEvbWFwYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmV4YW1wbGUtaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/mapa/mapa.component.ts":
/*!****************************************!*\
  !*** ./src/app/mapa/mapa.component.ts ***!
  \****************************************/
/*! exports provided: MapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function() { return MapaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crud.service */ "./src/app/crud.service.ts");



let MapaComponent = class MapaComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.title = 'Mapa de Control';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.zoom = 6;
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'Administrador',
                iconUrl: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            }
        ];
    }
    ngOnInit() {
        this.crudService.read_Vendedor().subscribe(data => {
            this.vendedores = data.map(e => {
                this.crearmarkersv(e.payload.doc.data()['Email'], e.payload.doc.data()['Latitud'], e.payload.doc.data()['Longitud']);
            });
        });
        this.crudService.read_Proveedores().subscribe(data => {
            this.proveedores = data.map(e => {
                this.crearmarkers(e.payload.doc.data()['Proveedor'], e.payload.doc.data()['Latitud'], e.payload.doc.data()['Longitud']);
            });
        });
        this.crudService.read_Pedidos().subscribe(data => {
            this.pedidos = data.map(e => {
                this.crearmarkerspe(e.payload.doc.data()['Nombre'], e.payload.doc.data()['Latitud'], e.payload.doc.data()['Longitud']);
            });
        });
        this.crudService.read_Ventas().subscribe(data => {
            this.ventas = data.map(e => {
                this.crearmarkersve(e.payload.doc.data()['Usuario'], e.payload.doc.data()['Latitud'], e.payload.doc.data()['Longitud']);
            });
        });
    }
    crearmarkers(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
    }
    crearmarkersv(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });
    }
    crearmarkerspe(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        });
    }
    crearmarkersve(a, b, c) {
        this.markers.push({
            label: a,
            lat: parseFloat(b),
            lng: parseFloat(c),
            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
        });
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
};
MapaComponent.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
MapaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mapa/mapa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa.component.css */ "./src/app/mapa/mapa.component.css")).default]
    })
], MapaComponent);



/***/ }),

/***/ "./src/app/nuevoproveedor/nuevoproveedor.component.css":
/*!*************************************************************!*\
  !*** ./src/app/nuevoproveedor/nuevoproveedor.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    width: 100%;\n    height: 100%;\n}\n\n.example-card {\n    max-width: 1200px;\n    margin-top: 100px;\n    margin-bottom: 100px;\n    margin-right: 150px;\n    margin-left: 80px;\n    text-align: center;\n    background-color: #3f1aad\n  }\n\n.example-card2 {\n    margin-top: 30px;\n    width: 600px;\n    min-width: 200px;\n    max-width: 1000px;\n    margin-right: 50px;\n    margin-left: 50px;\n    text-align: center;\n    background-color: #eff\n    \n  }\n\n.example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n\n.example-icon {\n    padding: 0 14px;\n  }\n\n.example-spacer {\n    flex: 1 1 auto;\n  }\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n.example-full-width {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVldm9wcm92ZWVkb3IvbnVldm9wcm92ZWVkb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEI7RUFDRjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQjs7RUFFRjs7QUFFQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvbnVldm9wcm92ZWVkb3IvbnVldm9wcm92ZWVkb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmMWFhZFxuICB9XG4gIC5leGFtcGxlLWNhcmQyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZlxuICAgIFxuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmV4YW1wbGUtaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/nuevoproveedor/nuevoproveedor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/nuevoproveedor/nuevoproveedor.component.ts ***!
  \************************************************************/
/*! exports provided: NuevoproveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoproveedorComponent", function() { return NuevoproveedorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crud.service */ "./src/app/crud.service.ts");



let NuevoproveedorComponent = class NuevoproveedorComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.title = 'Registro de Proveedores';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.contador = 4;
        this.zoom = 6;
    }
    ngOnInit() {
        this.crudService.read_Proveedores().subscribe(data => {
            this.proveedores = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Proveedor: e.payload.doc.data()['Proveedor'],
                    Codigo: e.payload.doc.data()['Codigo'],
                    Descripcion: e.payload.doc.data()['Descripcion'],
                    latit: e.payload.doc.data()['Latitud'],
                    long: e.payload.doc.data()['Longitud']
                };
            });
            console.log(this.proveedores);
        });
    }
    CreateRecord() {
        if (this.prov !== "" && this.cod !== "" && this.desc !== "") {
            let record = {};
            record['Proveedor'] = this.prov;
            record['Codigo'] = this.cod;
            record['Descripcion'] = this.desc;
            record['Latitud'] = this.latit;
            record['Longitud'] = this.long;
            this.crudService.create_NewProveedor(record).then(resp => {
                this.prov = "";
                this.cod = "";
                this.desc = "";
                this.latit = "";
                this.long = "";
                console.log(resp);
            })
                .catch(error => {
                console.log(error);
            });
        }
    }
    RemoveRecord(rowID) {
        this.crudService.delete_Proveedor(rowID);
    }
    EditRecord(record) {
        record.isEdit = true;
        record.EditProv = record.Proveedor;
        record.EditCod = record.Codigo;
        record.EditDesc = record.Descripcion;
    }
    UpdateRecord(recordRow) {
        let record = {};
        record['Proveedor'] = recordRow.EditProv;
        record['Codigo'] = recordRow.EditCod;
        record['Desc'] = recordRow.EditDesc;
        this.crudService.update_Producto(recordRow.id, record);
        recordRow.isEdit = false;
    }
};
NuevoproveedorComponent.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
NuevoproveedorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nuevoproveedor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nuevoproveedor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nuevoproveedor/nuevoproveedor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nuevoproveedor.component.css */ "./src/app/nuevoproveedor/nuevoproveedor.component.css")).default]
    })
], NuevoproveedorComponent);



/***/ }),

/***/ "./src/app/producto/producto.component.css":
/*!*************************************************!*\
  !*** ./src/app/producto/producto.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n    max-width: 1200px;\n    margin-top: 100px;\n    margin-bottom: 100px;\n    margin-right: 150px;\n    margin-left: 80px;\n    text-align: center;\n    background-color: #3f1aad\n  }\n  .example-card2 {\n    margin-top: 30px;\n    max-width: 600px;\n    min-width: 200px;\n    max-width: 1000px;\n    margin-right: 50px;\n    margin-left: 50px;\n    text-align: center;\n    background-color: #eff\n    \n  }\n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n  .example-icon {\n    padding: 0 14px;\n  }\n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  .example-full-width {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCO0VBQ0Y7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQjs7RUFFRjtFQUVBO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL3Byb2R1Y3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YxYWFkXG4gIH1cbiAgLmV4YW1wbGUtY2FyZDIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZlxuICAgIFxuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmV4YW1wbGUtaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "./src/app/producto/producto.component.ts":
/*!************************************************!*\
  !*** ./src/app/producto/producto.component.ts ***!
  \************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crud.service */ "./src/app/crud.service.ts");



let ProductoComponent = class ProductoComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.title = 'Plantilla de productos';
    }
    ngOnInit() {
        this.crudService.read_Productos().subscribe(data => {
            this.productos = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Proveedor: e.payload.doc.data()['Proveedor'],
                    Producto: e.payload.doc.data()['Producto'],
                    Descripcion: e.payload.doc.data()['Descripcion']
                };
            });
            console.log(this.productos);
        });
    }
    CreateRecord() {
        if (this.prov !== "" && this.prod !== "" && this.desc !== "") {
            let record = {};
            record['Proveedor'] = this.prov;
            record['Producto'] = this.prod;
            record['Descripcion'] = this.desc;
            record['Precio'] = this.prec;
            this.crudService.create_NewProducto(record).then(resp => {
                this.prov = "";
                this.prod = "";
                this.desc = "";
                this.prec = "";
                console.log(resp);
            })
                .catch(error => {
                console.log(error);
            });
        }
    }
    RemoveRecord(rowID) {
        this.crudService.delete_Producto(rowID);
    }
    EditRecord(record) {
        record.isEdit = true;
        record.EditProv = record.Proveedor;
        record.EditProd = record.Producto;
        record.EditDesc = record.Descripcion;
    }
    UpdateRecord(recordRow) {
        let record = {};
        record['Proveedor'] = recordRow.EditProv;
        record['Producto'] = recordRow.EditProd;
        record['Desc'] = recordRow.EditDesc;
        record['Prec'] = recordRow.EditPrec;
        this.crudService.update_Producto(recordRow.id, record);
        recordRow.isEdit = false;
    }
};
ProductoComponent.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-producto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./producto.component.css */ "./src/app/producto/producto.component.css")).default]
    })
], ProductoComponent);



/***/ }),

/***/ "./src/app/proveedor/proveedor.component.css":
/*!***************************************************!*\
  !*** ./src/app/proveedor/proveedor.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n    max-width: 1200px;\n    margin-top: 100px;\n    margin-bottom: 100px;\n    margin-right: 150px;\n    margin-left: 80px;\n    text-align: center;\n    background-color: #3f1aad\n  }\n  .example-card2 {\n    margin-top: 30px;\n    width: 600px;\n    min-width: 200px;\n    max-width: 1000px;\n    margin-right: 50px;\n    margin-left: 50px;\n    text-align: center;\n    background-color: #eff\n    \n  }\n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n  .example-icon {\n    padding: 0 14px;\n  }\n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  .example-full-width {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmVlZG9yL3Byb3ZlZWRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEI7RUFDRjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCOztFQUVGO0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvcHJvdmVlZG9yL3Byb3ZlZWRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmMWFhZFxuICB9XG4gIC5leGFtcGxlLWNhcmQyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZlxuICAgIFxuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmV4YW1wbGUtaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "./src/app/proveedor/proveedor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/proveedor/proveedor.component.ts ***!
  \**************************************************/
/*! exports provided: ProveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorComponent", function() { return ProveedorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crud.service */ "./src/app/crud.service.ts");



let ProveedorComponent = class ProveedorComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.title = 'Plantilla de proveedores';
    }
    ngOnInit() {
        this.crudService.read_Proveedores().subscribe(data => {
            this.proveedores = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Proveedor: e.payload.doc.data()['Proveedor'],
                    Codigo: e.payload.doc.data()['Codigo'],
                    Descripcion: e.payload.doc.data()['Descripcion'],
                    Longitud: e.payload.doc.data()['Longitud'],
                    Latitud: e.payload.doc.data()['Latitud']
                };
            });
            console.log(this.proveedores);
        });
    }
    RemoveRecord(rowID) {
        this.crudService.delete_Proveedor(rowID);
    }
    EditRecord(record) {
        record.isEdit = true;
        record.EditProv = record.Proveedor;
        record.EditCod = record.Codigo;
        record.EditDesc = record.Descripcion;
        record.EditLng = record.Longitud;
        record.EditLat = record.Latitud;
    }
    UpdateRecord(recordRow) {
        let record = {};
        record['Proveedor'] = recordRow.EditProv;
        record['Codigo'] = recordRow.EditCod;
        record['Descripcion'] = recordRow.EditDesc;
        record['Longitud'] = recordRow.EditLng;
        record['Latitud'] = recordRow.EditLat;
        this.crudService.update_Producto(recordRow.id, record);
        recordRow.isEdit = false;
    }
};
ProveedorComponent.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
ProveedorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proveedor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proveedor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/proveedor/proveedor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proveedor.component.css */ "./src/app/proveedor/proveedor.component.css")).default]
    })
], ProveedorComponent);



/***/ }),

/***/ "./src/app/vendedor/vendedor.component.css":
/*!*************************************************!*\
  !*** ./src/app/vendedor/vendedor.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .example-card {\n    max-width: 1200px;\n    margin-top: 100px;\n    margin-bottom: 100px;\n    margin-right: 150px;\n    margin-left: 80px;\n    text-align: center;\n    background-color: #3f1aad\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZGVkb3IvdmVuZGVkb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRlZG9yL3ZlbmRlZG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjFhYWRcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/vendedor/vendedor.component.ts":
/*!************************************************!*\
  !*** ./src/app/vendedor/vendedor.component.ts ***!
  \************************************************/
/*! exports provided: VendedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendedorComponent", function() { return VendedorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud.service */ "./src/app/crud.service.ts");





let VendedorComponent = class VendedorComponent {
    constructor(crudService, afAuth, authenticationService) {
        this.crudService = crudService;
        this.afAuth = afAuth;
        this.authenticationService = authenticationService;
        this.title = 'Plantilla de vendedores';
        this.email = '';
        this.passrd = '';
        this.cpassrd = '';
        this.newEmail = '';
        this.newPass = '';
        this.inicio = '0';
    }
    ngOnInit() {
        this.crudService.read_Vendedor().subscribe(data => {
            this.vendedores = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Email: e.payload.doc.data()['Email'],
                    Password: e.payload.doc.data()['Password'],
                    Latitud: e.payload.doc.data()['Latitud'],
                    Longitud: e.payload.doc.data()['Longitud']
                };
            });
            console.log(this.vendedores);
        });
    }
    resetForm() {
        this.email = '';
        this.passrd = '';
        this.cpassrd = '';
        this.newEmail = '';
        this.newPass = '';
    }
    CreateRecord() {
        let record = {};
        if (this.passrd == this.cpassrd && this.passrd !== "" && this.email !== "") {
            record['Email'] = this.email;
            record['Password'] = this.passrd;
            record['Latitud'] = this.inicio;
            record['Longitud'] = this.inicio;
            this.crudService.create_NewVendedor(record).then(resp => {
                this.resetForm();
                console.log(resp);
            })
                .catch(error => {
                console.log(error);
            });
        }
    }
    RemoveRecord(rowID) {
        this.crudService.delete_Vendedor(rowID);
    }
    EditRecord(record) {
        record.isEdit = true;
        record.EditEmail = record.Email;
        record.EditPass = record.Password;
    }
    UpdateRecord(recordRow) {
        let record = {};
        record['Email'] = recordRow.EditEmail;
        record['Password'] = recordRow.EditPass;
        this.crudService.update_Vendedor(recordRow.id, record);
        recordRow.isEdit = false;
    }
    registrar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(this.passrd === this.cpassrd)) {
                return console.error("Las contrasenas son diferentes");
            }
            try {
                const res = yield this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.passrd);
                console.log(res);
            }
            catch (error) {
                console.dir(error);
            }
        });
    }
    borrar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(this.passrd === this.cpassrd)) {
                return console.error("Las contrasenas son diferentes");
            }
            try {
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(this.email, this.passrd);
                this.afAuth.auth.currentUser.delete();
                console.log("Borrado");
            }
            catch (error) {
                console.dir(error);
            }
        });
    }
    getUserByEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(this.passrd === this.cpassrd)) {
                return console.error("Las contrasenas son diferentes");
            }
            try {
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(this.email, this.passrd);
                this.afAuth.auth.currentUser.delete();
                console.log("Borrado");
            }
            catch (error) {
                console.dir(error);
            }
        });
    }
};
VendedorComponent.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
VendedorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendedor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vendedor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendedor/vendedor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vendedor.component.css */ "./src/app/vendedor/vendedor.component.css")).default]
    })
], VendedorComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\proyectosoftware\webappdistribuidor\webversion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map