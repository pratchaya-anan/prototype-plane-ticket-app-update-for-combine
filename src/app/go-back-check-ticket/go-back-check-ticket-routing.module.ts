import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoBackCheckTicketPage } from './go-back-check-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: GoBackCheckTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoBackCheckTicketPageRoutingModule {}
