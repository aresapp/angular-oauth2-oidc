var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, } from '@angular/forms';
let CityValidatorDirective = class CityValidatorDirective {
    // @Input() city: string;
    constructor(city) {
        this.city = city;
    }
    validate(c) {
        let formGroup = c.root;
        let otherValueCtrl = formGroup.controls['to'];
        if (!otherValueCtrl)
            return {};
        let otherValue = otherValueCtrl.value;
        if (otherValue == c.value) {
            return {
                city: 'rundflug',
            };
        }
        if (!this.city)
            return {};
        let allowed = this.city.split(','); //['Graz', 'Hamburg', 'Wien', 'Frankfurt'];
        if (allowed.indexOf(c.value) == -1) {
            return {
                city: true,
            };
        }
        return {};
    }
};
CityValidatorDirective = __decorate([
    Directive({
        selector: 'input[city]',
        providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CityValidatorDirective,
                multi: true,
            },
        ],
    }),
    __param(0, Attribute('city'))
], CityValidatorDirective);
export { CityValidatorDirective };
//# sourceMappingURL=city.validator.js.map