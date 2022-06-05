import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoBackCheckTicketPageRoutingModule } from './go-back-check-ticket-routing.module';

import { GoBackCheckTicketPage } from './go-back-check-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoBackCheckTicketPageRoutingModule
  ],
  declarations: [GoBackCheckTicketPage]
})
export class GoBackCheckTicketPageModule {}
