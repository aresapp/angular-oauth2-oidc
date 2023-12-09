var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Validators, } from '@angular/forms';
let FlightSearchReactiveComponent = class FlightSearchReactiveComponent {
    constructor(flightService, fb) {
        this.flightService = flightService;
        this.fb = fb;
        this.flights = [];
        this.formDesc = [];
        this.formDesc.push({
            label: 'Von',
            name: 'from',
        });
        this.formDesc.push({
            label: 'Nach',
            name: 'to',
        });
        this.filter = fb.group({
            from: [
                'Graz',
                [
                    Validators.required,
                    Validators.minLength(3),
                    (c) => {
                        if (c.value != 'Graz' && c.value != 'Hamburg') {
                            return {
                                city: true,
                            };
                        }
                        return {};
                    },
                ],
            ],
            to: ['Hamburg'],
        });
        this.filter.valueChanges.subscribe((e) => {
            console.debug('formular geändert', e);
        });
        this.filter.controls['from'].valueChanges.subscribe((e) => {
            console.debug('from geändert', e);
        });
    }
    select(f) {
        this.selectedFlight = f;
    }
    search() {
        var value = this.filter.value;
        this.flightService.find(value.from, value.to);
        // .map(function(resp) { return resp.json() })
    }
};
FlightSearchReactiveComponent = __decorate([
    Component({
        selector: 'flight-search-reactive',
        templateUrl: 'flight-search-reactive.component.html',
        providers: [FlightService],
        styleUrls: ['flight-search-reactive.component.css'],
    })
], FlightSearchReactiveComponent);
export { FlightSearchReactiveComponent };
//# sourceMappingURL=flight-search-reactive.component.js.map