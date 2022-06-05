import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoBackDetailBillPageRoutingModule } from './go-back-detail-bill-routing.module';

import { GoBackDetailBillPage } from './go-back-detail-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoBackDetailBillPageRoutingModule
  ],
  declarations: [GoBackDetailBillPage]
})
export class GoBackDetailBillPageModule {}
