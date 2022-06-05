import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoBackReceiptTicketPageRoutingModule } from './go-back-receipt-ticket-routing.module';

import { GoBackReceiptTicketPage } from './go-back-receipt-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoBackReceiptTicketPageRoutingModule
  ],
  declarations: [GoBackReceiptTicketPage]
})
export class GoBackReceiptTicketPageModule {}
