import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptTicketPage } from './receipt-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptTicketPageRoutingModule {}
