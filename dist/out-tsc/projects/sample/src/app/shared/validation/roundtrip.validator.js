var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { NG_VALIDATORS, } from '@angular/forms';
let RoundTrip = class RoundTrip {
    validate(control) {
        let formGroup = control;
        let fromCtrl = formGroup.controls['from'];
        let toCtrl = formGroup.controls['to'];
        if (!fromCtrl || !toCtrl)
            return {};
        let from = fromCtrl.value;
        let to = toCtrl.value;
        if (from == to) {
            return {
                'round-trip': {
                    city: from,
                },
            };
        }
        return {};
    }
};
RoundTrip = __decorate([
    Directive({
        selector: 'form[round-trip]',
        providers: [{ provide: NG_VALIDATORS, useExisting: RoundTrip, multi: true }],
    })
], RoundTrip);
export { RoundTrip };
//# sourceMappingURL=roundtrip.validator.js.map