import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-ticket',
    loadChildren: () => import('./list-ticket/list-ticket.module').then( m => m.ListTicketPageModule)
  },
  {
    path: 'check-ticket',
    loadChildren: () => import('./check-ticket/check-ticket.module').then( m => m.CheckTicketPageModule)
  },
  {
    path: 'checkout-ticket',
    loadChildren: () => import('./checkout-ticket/checkout-ticket.module').then( m => m.CheckoutTicketPageModule)
  },
  {
    path: 'receipt-ticket',
    loadChildren: () => import('./receipt-ticket/receipt-ticket.module').then( m => m.ReceiptTicketPageModule)
  },
  {
    path: 'go-list-ticket',
    loadChildren: () => import('./go-list-ticket/go-list-ticket.module').then( m => m.GoListTicketPageModule)
  },
  {
    path: 'back-list-ticket',
    loadChildren: () => import('./back-list-ticket/back-list-ticket.module').then( m => m.BackListTicketPageModule)
  },
  {
    path: 'go-back-check-ticket',
    loadChildren: () => import('./go-back-check-ticket/go-back-check-ticket.module').then( m => m.GoBackCheckTicketPageModule)
  },
  {
    path: 'go-back-checkout-ticket',
    loadChildren: () => import('./go-back-checkout-ticket/go-back-checkout-ticket.module').then( m => m.GoBackCheckoutTicketPageModule)
  },
  {
    path: 'go-back-receipt-ticket',
    loadChildren: () => import('./go-back-receipt-ticket/go-back-receipt-ticket.module').then( m => m.GoBackReceiptTicketPageModule)
  },
  {
    path: 'detail-bill',
    loadChildren: () => import('./detail-bill/detail-bill.module').then( m => m.DetailBillPageModule)
  },
  {
    path: 'go-back-detail-bill',
    loadChildren: () => import('./go-back-detail-bill/go-back-detail-bill.module').then( m => m.GoBackDetailBillPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
