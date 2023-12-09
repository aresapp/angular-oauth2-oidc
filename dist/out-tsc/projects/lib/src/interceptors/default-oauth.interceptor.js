var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Optional } from '@angular/core';
import { of, merge } from 'rxjs';
import { catchError, filter, map, take, mergeMap, timeout, } from 'rxjs/operators';
let DefaultOAuthInterceptor = class DefaultOAuthInterceptor {
    constructor(oAuthService, errorHandler, moduleConfig) {
        this.oAuthService = oAuthService;
        this.errorHandler = errorHandler;
        this.moduleConfig = moduleConfig;
    }
    checkUrl(url) {
        if (this.moduleConfig.resourceServer.customUrlValidation) {
            return this.moduleConfig.resourceServer.customUrlValidation(url);
        }
        if (this.moduleConfig.resourceServer.allowedUrls) {
            return !!this.moduleConfig.resourceServer.allowedUrls.find((u) => url.toLowerCase().startsWith(u.toLowerCase()));
        }
        return true;
    }
    intercept(req, next) {
        const url = req.url.toLowerCase();
        if (!this.moduleConfig ||
            !this.moduleConfig.resourceServer ||
            !this.checkUrl(url)) {
            return next.handle(req);
        }
        const sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;
        if (!sendAccessToken) {
            return next
                .handle(req)
                .pipe(catchError((err) => this.errorHandler.handleError(err)));
        }
        return merge(of(this.oAuthService.getAccessToken()).pipe(filter((token) => !!token)), this.oAuthService.events.pipe(filter((e) => e.type === 'token_received'), timeout(this.oAuthService.waitForTokenInMsec || 0), catchError(() => of(null)), // timeout is not an error
        map(() => this.oAuthService.getAccessToken()))).pipe(take(1), mergeMap((token) => {
            if (token) {
                const header = 'Bearer ' + token;
                const headers = req.headers.set('Authorization', header);
                req = req.clone({ headers });
            }
            return next
                .handle(req)
                .pipe(catchError((err) => this.errorHandler.handleError(err)));
        }));
    }
};
DefaultOAuthInterceptor = __decorate([
    Injectable(),
    __param(2, Optional())
], DefaultOAuthInterceptor);
export { DefaultOAuthInterceptor };
//# sourceMappingURL=default-oauth.interceptor.js.map