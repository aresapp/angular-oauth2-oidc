var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { authCodeFlowConfig } from './auth.config';
import { NgIf } from '@angular/common';
let AppComponent = class AppComponent {
    constructor(oauthService) {
        this.oauthService = oauthService;
        this.title = 'Quickstart Demo';
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.loadDiscoveryDocumentAndLogin();
        //this.oauthService.setupAutomaticSilentRefresh();
        // Automatically load user profile
        this.oauthService.events
            .pipe(filter((e) => e.type === 'token_received'))
            .subscribe((_) => this.oauthService.loadUserProfile());
    }
    get userName() {
        const claims = this.oauthService.getIdentityClaims();
        if (!claims)
            return null;
        return claims['given_name'];
    }
    get idToken() {
        return this.oauthService.getIdToken();
    }
    get accessToken() {
        return this.oauthService.getAccessToken();
    }
    refresh() {
        this.oauthService.refreshToken();
    }
};
AppComponent = __decorate([
    Component({
        standalone: true,
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        imports: [NgIf],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map