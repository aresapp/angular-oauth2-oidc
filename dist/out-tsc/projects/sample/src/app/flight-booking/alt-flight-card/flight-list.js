var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
let FlightListComponent = class FlightListComponent {
    constructor() {
        this.flights = [];
        this.selectedFlightChange = new EventEmitter();
    }
    change(f) {
        this.selectedFlightChange.emit(f);
    }
};
__decorate([
    Input()
], FlightListComponent.prototype, "flights", void 0);
__decorate([
    Input()
], FlightListComponent.prototype, "selectedFlight", void 0);
__decorate([
    Output()
], FlightListComponent.prototype, "selectedFlightChange", void 0);
FlightListComponent = __decorate([
    Component({
        selector: 'flight-list',
        template: `
    <div class="row">
      <div *ngFor="let f of flights" class="col-sm-6 col-md-4 col-lg-3 ">
        <alt-flight-card
          [item]="f"
          [selected]="f == selectedFlight"
          (selectedChange)="change(f)"
        >
        </alt-flight-card>
      </div>
    </div>
  `,
    })
], FlightListComponent);
export { FlightListComponent };
//# sourceMappingURL=flight-list.js.map