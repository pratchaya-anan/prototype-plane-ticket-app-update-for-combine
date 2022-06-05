import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoBackDetailBillPage } from './go-back-detail-bill.page';

const routes: Routes = [
  {
    path: '',
    component: GoBackDetailBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoBackDetailBillPageRoutingModule {}
