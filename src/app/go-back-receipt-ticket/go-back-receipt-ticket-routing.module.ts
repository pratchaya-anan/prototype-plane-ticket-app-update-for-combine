import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoBackReceiptTicketPage } from './go-back-receipt-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: GoBackReceiptTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoBackReceiptTicketPageRoutingModule {}
