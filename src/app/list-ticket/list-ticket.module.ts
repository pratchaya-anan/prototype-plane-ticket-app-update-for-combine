import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTicketPageRoutingModule } from './list-ticket-routing.module';

import { ListTicketPage } from './list-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTicketPageRoutingModule
  ],
  declarations: [ListTicketPage]
})
export class ListTicketPageModule {}
