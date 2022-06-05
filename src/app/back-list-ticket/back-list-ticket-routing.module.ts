import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackListTicketPage } from './back-list-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: BackListTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackListTicketPageRoutingModule {}
