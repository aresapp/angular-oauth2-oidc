var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let FlightSearchComponent = class FlightSearchComponent {
    constructor(flightService, oauthService) {
        this.flightService = flightService;
        this.oauthService = oauthService;
        this.from = 'Graz';
        this.to = '';
        console.debug('access-token', this.oauthService.getAccessToken());
    }
    // cmp.flights
    get flights() {
        return this.flightService.flights;
    }
    select(f) {
        this.selectedFlight = f;
    }
    search() {
        this.flightService.find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    }
    refresh() {
        this.oauthService.oidc = true;
        if (!this.oauthService.useSilentRefresh &&
            this.oauthService.responseType === 'code') {
            this.oauthService
                .refreshToken()
                .then((info) => console.debug('refresh ok', info))
                .catch((err) => console.error('refresh error', err));
        }
        else {
            this.oauthService
                .silentRefresh()
                .then((info) => console.debug('silent refresh ok', info))
                .catch((err) => console.error('silent refresh error', err));
        }
    }
};
FlightSearchComponent = __decorate([
    Component({
        selector: 'flight-search',
        templateUrl: './flight-search.component.html',
        styleUrls: ['./flight-search.component.css'],
    })
], FlightSearchComponent);
export { FlightSearchComponent };
//# sourceMappingURL=flight-search.component.js.map