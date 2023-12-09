var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { authPasswordFlowConfig } from '../auth-password-flow.config';
import { Component } from '@angular/core';
let PasswordFlowLoginComponent = class PasswordFlowLoginComponent {
    constructor(oauthService) {
        // Tweak config for password flow
        // This is just needed b/c this demo uses both,
        // implicit flow as well as password flow
        this.oauthService = oauthService;
        this.loginFailed = false;
        this.oauthService.configure(authPasswordFlowConfig);
        this.oauthService.loadDiscoveryDocument();
    }
    ngOnInit() { }
    loadUserProfile() {
        this.oauthService.loadUserProfile().then((up) => (this.userProfile = up));
    }
    get access_token() {
        return this.oauthService.getAccessToken();
    }
    get access_token_expiration() {
        return this.oauthService.getAccessTokenExpiration();
    }
    get givenName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims)
            return null;
        return claims['given_name'];
    }
    get familyName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims)
            return null;
        return claims['family_name'];
    }
    loginWithPassword() {
        this.oauthService
            .fetchTokenUsingPasswordFlowAndLoadUserProfile(this.userName, this.password)
            .then(() => {
            console.debug('successfully logged in');
            this.loginFailed = false;
        })
            .catch((err) => {
            console.error('error logging in', err);
            this.loginFailed = true;
        });
    }
    logout() {
        this.oauthService.logOut(true);
    }
};
PasswordFlowLoginComponent = __decorate([
    Component({
        selector: 'app-password-flow-login',
        templateUrl: './password-flow-login.component.html',
    })
], PasswordFlowLoginComponent);
export { PasswordFlowLoginComponent };
//# sourceMappingURL=password-flow-login.component.js.map