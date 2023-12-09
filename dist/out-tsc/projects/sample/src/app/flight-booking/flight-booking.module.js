var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight.card.component';
import { AltFlightCardComponent } from './alt-flight-card/alt-flight.card.component';
import { FlightListComponent } from './alt-flight-card/flight-list';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchReactiveComponent } from './flight-search-reactive/flight-search-reactive.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightBookingRouterModule } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightService } from './services/flight.service';
let FlightBookingModule = class FlightBookingModule {
};
FlightBookingModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule,
            FlightBookingRouterModule,
        ],
        declarations: [
            FlightSearchComponent,
            FlightCardComponent,
            AltFlightCardComponent,
            FlightListComponent,
            FlightSearchReactiveComponent,
            PassengerSearchComponent,
            FlightEditComponent,
            FlightBookingComponent,
        ],
        providers: [FlightService],
        exports: [],
    })
], FlightBookingModule);
export { FlightBookingModule };
//# sourceMappingURL=flight-booking.module.js.map