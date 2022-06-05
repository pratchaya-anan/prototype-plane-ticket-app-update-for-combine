import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkout-ticket',
  templateUrl: './checkout-ticket.page.html',
  styleUrls: ['./checkout-ticket.page.scss'],
})
export class CheckoutTicketPage implements OnInit {
  tickets = [
    { img: 'assets/photo/air.png', amount: '1', flight: 'บินตรง', weight: '7', age: 'ผู้ใหญ่', airline: 'AIR ASIA', airlineID: 'DDC552', THgo: 'ท่าอากาศยานขอนแก่น', THto: 'ท่าอากาศยานสุวรรณภูมิ', go: 'KKC', to: 'BKK', date: '29 พ.ค. 2022', gtime: '13:05', ttime: '14:35', time: '1h30m', price: '458'},
];

  constructor(private alertCtrl: AlertController,private router: Router) { }

  async showAlert() {
    await this.alertCtrl.create({
      header: 'ยืนยันการชำระเงิน',
      message: 'ค่าใช้จายทั้งหมดที่คุณต้องชำระคือ 490 บาท',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            this.router.navigate(['/receipt-ticket']);
          }
        }
      ]
    }).then(res => res.present());
  }

  ngOnInit() {
  }

}
