import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackListTicketPageRoutingModule } from './back-list-ticket-routing.module';

import { BackListTicketPage } from './back-list-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackListTicketPageRoutingModule
  ],
  declarations: [BackListTicketPage]
})
export class BackListTicketPageModule {}
