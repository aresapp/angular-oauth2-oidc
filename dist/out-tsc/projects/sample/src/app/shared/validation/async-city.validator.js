var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
let AsyncCityValidatorDirective = class AsyncCityValidatorDirective {
    validate(ctrl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (ctrl.value == 'Graz' || ctrl.value == 'Hamburg') {
                    resolve({});
                    return;
                }
                resolve({ 'async-city': false });
            }, 100);
        });
    }
};
AsyncCityValidatorDirective = __decorate([
    Directive({
        selector: 'input[async-city]',
        providers: [
            {
                provide: NG_ASYNC_VALIDATORS,
                useExisting: AsyncCityValidatorDirective,
                multi: true,
            },
        ],
    })
], AsyncCityValidatorDirective);
export { AsyncCityValidatorDirective };
//# sourceMappingURL=async-city.validator.js.map