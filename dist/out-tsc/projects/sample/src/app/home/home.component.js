var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { authConfig } from '../auth.config';
import { Component } from '@angular/core';
import { authCodeFlowConfig } from '../auth-code-flow.config';
let HomeComponent = class HomeComponent {
    constructor(route, oauthService) {
        this.route = route;
        this.oauthService = oauthService;
        this.loginFailed = false;
    }
    get hasValidAccessToken() {
        return this.oauthService.hasValidAccessToken();
    }
    get hasValidIdToken() {
        return this.oauthService.hasValidIdToken();
    }
    ngOnInit() {
        this.route.params.subscribe((p) => {
            this.login = p['login'];
        });
        // This would directly (w/o user interaction) redirect the user to the
        // login page if they are not already logged in.
        /*
            this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
                if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
                  this.oauthService.initImplicitFlow('some-state');
                }
            });
        */
    }
    async loginImplicit() {
        // Tweak config for implicit flow
        this.oauthService.configure(authConfig);
        await this.oauthService.loadDiscoveryDocument();
        sessionStorage.setItem('flow', 'implicit');
        this.oauthService.initLoginFlow('/some-state;p1=1;p2=2?p3=3&p4=4');
        // the parameter here is optional. It's passed around and can be used after logging in
    }
    async loginImplicitInPopup() {
        // Tweak config for implicit flow
        this.oauthService.configure(authConfig);
        await this.oauthService.loadDiscoveryDocument();
        sessionStorage.setItem('flow', 'implicit');
        this.oauthService.initLoginFlowInPopup().then(() => {
            this.loadUserProfile();
        });
        // the parameter here is optional. It's passed around and can be used after logging in
    }
    async loginCode() {
        // Tweak config for code flow
        this.oauthService.configure(authCodeFlowConfig);
        await this.oauthService.loadDiscoveryDocument();
        sessionStorage.setItem('flow', 'code');
        this.oauthService.initLoginFlow('/some-state;p1=1;p2=2?p3=3&p4=4');
        // the parameter here is optional. It's passed around and can be used after logging in
    }
    async loginCodeInPopup() {
        // Tweak config for code flow
        this.oauthService.configure(authCodeFlowConfig);
        await this.oauthService.loadDiscoveryDocument();
        sessionStorage.setItem('flow', 'code');
        this.oauthService.initLoginFlowInPopup().then(() => {
            this.loadUserProfile();
        });
    }
    logout() {
        // this.oauthService.logOut();
        this.oauthService.revokeTokenAndLogout();
    }
    loadUserProfile() {
        this.oauthService.loadUserProfile().then((up) => (this.userProfile = up));
    }
    startAutomaticRefresh() {
        this.oauthService.setupAutomaticSilentRefresh();
    }
    stopAutomaticRefresh() {
        this.oauthService.stopAutomaticRefresh();
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
    refresh() {
        this.oauthService.oidc = true;
        if (!this.oauthService.useSilentRefresh &&
            this.oauthService.responseType === 'code') {
            this.oauthService
                .refreshToken()
                .then((info) => console.debug('refresh ok', info))
                .catch((err) => console.error('refresh error', err));
        }
        else {
            this.oauthService
                .silentRefresh()
                .then((info) => console.debug('silent refresh ok', info))
                .catch((err) => console.error('silent refresh error', err));
        }
    }
    set requestAccessToken(value) {
        this.oauthService.requestAccessToken = value;
        localStorage.setItem('requestAccessToken', '' + value);
    }
    get requestAccessToken() {
        return this.oauthService.requestAccessToken;
    }
    set useHashLocationStrategy(value) {
        const oldValue = localStorage.getItem('useHashLocationStrategy') === 'true';
        if (value !== oldValue) {
            localStorage.setItem('useHashLocationStrategy', value ? 'true' : 'false');
            window.location.reload();
        }
    }
    get useHashLocationStrategy() {
        return localStorage.getItem('useHashLocationStrategy') === 'true';
    }
    get id_token() {
        return this.oauthService.getIdToken();
    }
    get access_token() {
        return this.oauthService.getAccessToken();
    }
    get id_token_expiration() {
        return this.oauthService.getIdTokenExpiration();
    }
    get access_token_expiration() {
        return this.oauthService.getAccessTokenExpiration();
    }
};
HomeComponent = __decorate([
    Component({
        templateUrl: './home.component.html',
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map