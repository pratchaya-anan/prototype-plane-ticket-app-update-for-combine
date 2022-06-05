import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoBackCheckoutTicketPageRoutingModule } from './go-back-checkout-ticket-routing.module';

import { GoBackCheckoutTicketPage } from './go-back-checkout-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoBackCheckoutTicketPageRoutingModule
  ],
  declarations: [GoBackCheckoutTicketPage]
})
export class GoBackCheckoutTicketPageModule {}
