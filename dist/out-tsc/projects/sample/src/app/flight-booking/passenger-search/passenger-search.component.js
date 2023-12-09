var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let PassengerSearchComponent = class PassengerSearchComponent {
    constructor(oauthService) {
        this.oauthService = oauthService;
    }
    ngOnInit() { }
    refresh() {
        this.oauthService.silentRefresh();
    }
};
PassengerSearchComponent = __decorate([
    Component({
        template: `
    <h1>PassengerSearch</h1>
    <p>Platzhalter-Seite. Hier könnte auch Ihre Werbung stehen ;-)</p>
    <p><button (click)="refresh()">Refresh</button></p>
  `,
    })
], PassengerSearchComponent);
export { PassengerSearchComponent };
//# sourceMappingURL=passenger-search.component.js.map