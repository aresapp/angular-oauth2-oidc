var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { DateTimeProvider } from 'angular-oauth2-oidc';
// Enabled this provider will make the sample to fail, since the demo IdP is correctly synced to world time.
// This is just a sample of the implementation, if you need it.
let CustomDateTimeProvider = class CustomDateTimeProvider extends DateTimeProvider {
    now() {
        return Date.now() - 10000000;
    }
    new() {
        // Implement your custom date.
        return new Date();
    }
};
CustomDateTimeProvider = __decorate([
    Injectable()
], CustomDateTimeProvider);
export { CustomDateTimeProvider };
//# sourceMappingURL=custom-date-time-provider.js.map