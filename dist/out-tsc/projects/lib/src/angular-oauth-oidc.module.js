var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OAuthModule_1;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NullValidationHandler } from './token-validation/null-validation-handler';
import { provideOAuthClient } from './provider';
let OAuthModule = OAuthModule_1 = class OAuthModule {
    static forRoot(config = null, validationHandlerClass = NullValidationHandler) {
        return {
            ngModule: OAuthModule_1,
            providers: [provideOAuthClient(config, validationHandlerClass)],
        };
    }
};
OAuthModule = OAuthModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [],
        exports: [],
    })
], OAuthModule);
export { OAuthModule };
//# sourceMappingURL=angular-oauth-oidc.module.js.map