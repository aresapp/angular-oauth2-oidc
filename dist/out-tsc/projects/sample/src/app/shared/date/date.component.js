var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input } from '@angular/core';
let DateComponent = class DateComponent {
    constructor() {
        console.debug('ctrl');
    }
    ngOnInit() { }
    ngOnChanges(change) {
        // if(change.date) { ... }
        console.debug('change', change);
        let date = new Date(this.date);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    }
};
__decorate([
    Input()
], DateComponent.prototype, "date", void 0);
DateComponent = __decorate([
    Component({
        selector: 'date-component',
        template: `
    <div>{{ day }}.{{ month }}.{{ year }} {{ hour }}:{{ minute }}</div>
  `,
    })
], DateComponent);
export { DateComponent };
//# sourceMappingURL=date.component.js.map