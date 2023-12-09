var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
let AltFlightCardComponent = class AltFlightCardComponent {
    constructor() {
        this.selectedChange = new EventEmitter();
    }
    select() {
        this.selectedChange.emit(true);
    }
};
__decorate([
    Input()
], AltFlightCardComponent.prototype, "item", void 0);
__decorate([
    Input()
], AltFlightCardComponent.prototype, "selected", void 0);
__decorate([
    Output()
], AltFlightCardComponent.prototype, "selectedChange", void 0);
AltFlightCardComponent = __decorate([
    Component({
        selector: 'alt-flight-card',
        templateUrl: 'alt-flight-card.component.html',
    })
], AltFlightCardComponent);
export { AltFlightCardComponent };
//# sourceMappingURL=alt-flight.card.component.js.map