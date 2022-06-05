import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoListTicketPageRoutingModule } from './go-list-ticket-routing.module';

import { GoListTicketPage } from './go-list-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoListTicketPageRoutingModule
  ],
  declarations: [GoListTicketPage]
})
export class GoListTicketPageModule {}
