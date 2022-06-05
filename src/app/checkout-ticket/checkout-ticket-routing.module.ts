import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutTicketPage } from './checkout-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutTicketPageRoutingModule {}
