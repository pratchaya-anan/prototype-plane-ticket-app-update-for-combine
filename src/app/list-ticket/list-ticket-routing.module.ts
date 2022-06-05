import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTicketPage } from './list-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: ListTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTicketPageRoutingModule {}
