var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SharedModule_1;
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { CityValidatorDirective } from './validation/city.validator';
import { RoundTrip } from './validation/roundtrip.validator';
import { AsyncCityValidatorDirective } from './validation/async-city.validator';
import { DateComponent } from './date/date.component';
import { AuthGuard } from './auth/auth.guard';
import { CustomPreloadingStrategy } from './preload/custom-preloading.strategy';
let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            providers: [AuthGuard, CustomPreloadingStrategy],
            ngModule: SharedModule_1,
        };
    }
};
SharedModule = SharedModule_1 = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule, // ngFor, ngIf, ngStyle, ngClass, date, json
        ],
        providers: [],
        declarations: [
            CityPipe,
            CityValidatorDirective,
            AsyncCityValidatorDirective,
            RoundTrip,
            DateComponent,
        ],
        exports: [
            CityPipe,
            CityValidatorDirective,
            AsyncCityValidatorDirective,
            RoundTrip,
            DateComponent,
        ],
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map