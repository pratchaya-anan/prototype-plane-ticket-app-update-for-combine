import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoBackCheckoutTicketPage } from './go-back-checkout-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: GoBackCheckoutTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoBackCheckoutTicketPageRoutingModule {}
