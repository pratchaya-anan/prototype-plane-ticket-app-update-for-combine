import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutTicketPageRoutingModule } from './checkout-ticket-routing.module';

import { CheckoutTicketPage } from './checkout-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutTicketPageRoutingModule
  ],
  declarations: [CheckoutTicketPage]
})
export class CheckoutTicketPageModule {}
