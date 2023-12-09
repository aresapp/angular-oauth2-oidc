var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { BASE_URL } from '../../app.tokens';
let FlightService = class FlightService {
    constructor(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.flights = [];
    }
    find(from, to) {
        let url = this.baseUrl + '/api/flight';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        //.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        let params = new HttpParams().set('from', from).set('to', to);
        this.http.get(url, { headers, params }).subscribe((flights) => {
            this.flights = flights;
        }, (err) => {
            console.warn('status', err.status);
        });
    }
};
FlightService = __decorate([
    Injectable(),
    __param(2, Inject(BASE_URL))
], FlightService);
export { FlightService };
//# sourceMappingURL=flight.service.js.map