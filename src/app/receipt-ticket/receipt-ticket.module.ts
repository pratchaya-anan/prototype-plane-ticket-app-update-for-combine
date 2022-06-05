import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceiptTicketPageRoutingModule } from './receipt-ticket-routing.module';

import { ReceiptTicketPage } from './receipt-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceiptTicketPageRoutingModule
  ],
  declarations: [ReceiptTicketPage]
})
export class ReceiptTicketPageModule {}
