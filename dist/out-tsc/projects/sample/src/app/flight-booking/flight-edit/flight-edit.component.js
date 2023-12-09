var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let FlightEditComponent = class FlightEditComponent {
    constructor(route) {
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null,
        };
        route.params.subscribe((p) => {
            this.id = p['id'];
        });
    }
    ngOnInit() { }
    decide(decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    }
    canDeactivate() {
        this.exitWarning.show = true;
        return new Promise((resolve) => {
            this.exitWarning.resolve = resolve;
        });
    }
};
FlightEditComponent = __decorate([
    Component({
        template: `
    <h1>Flight Edit!</h1>
    <p>Hier könnte auch der Datensatz mit der Id {{ id }} stehen!</p>

    <div *ngIf="exitWarning.show" class="alert alert-warning">
      <div>Daten wurden nicht gespeichert! Trotzdem Maske verlassen?</div>
      <div>
        <a
          href="javascript:void(0)"
          (click)="decide(true)"
          class="btn btn-danger"
          >Ja</a
        >
        <a
          href="javascript:void(0)"
          (click)="decide(false)"
          class="btn btn-default"
          >Nein</a
        >
      </div>
    </div>
  `,
    })
], FlightEditComponent);
export { FlightEditComponent };
//# sourceMappingURL=flight-edit.component.js.map