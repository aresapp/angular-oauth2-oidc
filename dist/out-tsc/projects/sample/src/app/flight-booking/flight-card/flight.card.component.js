var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
let FlightCardComponent = class FlightCardComponent {
    constructor() {
        this.selectedItemChange = new EventEmitter();
    }
    select() {
        this.selectedItemChange.emit(this.item);
    }
};
__decorate([
    Input()
], FlightCardComponent.prototype, "item", void 0);
__decorate([
    Input()
], FlightCardComponent.prototype, "selectedItem", void 0);
__decorate([
    Output()
], FlightCardComponent.prototype, "selectedItemChange", void 0);
FlightCardComponent = __decorate([
    Component({
        selector: 'flight-card',
        templateUrl: './flight-card.component.html',
    })
], FlightCardComponent);
export { FlightCardComponent };
//# sourceMappingURL=flight.card.component.js.map