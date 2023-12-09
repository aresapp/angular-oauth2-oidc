var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule, } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BASE_URL } from './app.tokens';
import { FlightHistoryComponent } from './flight-history/flight-history.component';
import { HomeComponent } from './home/home.component';
import { PasswordFlowLoginComponent } from './password-flow-login/password-flow-login.component';
// import { CustomDateTimeProvider } from './shared/date/custom-date-time-provider';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { useHash } from '../flags';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            RouterModule.forRoot(APP_ROUTES, { useHash }),
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            SharedModule.forRoot(),
            OAuthModule.forRoot({
                resourceServer: {
                    allowedUrls: ['http://www.angular.at/api'],
                    sendAccessToken: true,
                },
            }),
        ],
        declarations: [
            AppComponent,
            HomeComponent,
            FlightHistoryComponent,
            PasswordFlowLoginComponent,
        ],
        providers: [
            // (useHash) ? { provide: LocationStrategy, useClass: HashLocationStrategy } : [],
            // {provide: AuthConfig, useValue: authConfig },
            // { provide: OAuthStorage, useValue: localStorage },
            // { provide: ValidationHandler, useClass: JwksValidationHandler },
            // Enabled the custom date time provider will make the sample fail to login, since the demo Idp time is correctly synced to the world time.
            // { provide: DateTimeProvider, useClass: CustomDateTimeProvider },
            { provide: BASE_URL, useValue: 'http://www.angular.at' },
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map