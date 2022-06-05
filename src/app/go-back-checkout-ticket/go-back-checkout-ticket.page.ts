import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-go-back-checkout-ticket',
  templateUrl: './go-back-checkout-ticket.page.html',
  styleUrls: ['./go-back-checkout-ticket.page.scss'],
})
export class GoBackCheckoutTicketPage implements OnInit {
  tickets = [
    { img: 'assets/photo/air.png', flight: 'บินตรง', weight: '7', airline: 'AIR ASIA', airlineID: 'DDC552', THgo: 'ท่าอากาศยานขอนแก่น', THto: 'ท่าอากาศยานสุวรรณภูมิ', go: 'KKC', to: 'BKK', date: '29 พ.ค. 2022', gtime: '13:05', ttime: '14:35', time: '1h30m', price: '458'},
];
  back_tickets = [
  { img: 'assets/photo/nok.jpg', amount: '4', flight: 'บินตรง', weight: '7', age: 'ผู้ใหญ่', airline: 'NOK AIR', airlineID: 'NPK529', THgo: 'ท่าอากาศยานสุวรรณภูมิ', THto: 'ท่าอากาศยานขอนแก่น', go: 'BKK', to: 'KKC', date: '4 มิ.ย. 2022', gtime: '06:00', ttime: '07:30', time: '1h30m', price: '679'},
];

  constructor(private alertCtrl: AlertController,private router: Router) { }

  async showAlert() {
    await this.alertCtrl.create({
      header: 'ยืนยันการชำระเงิน',
      message: 'ค่าใช้จายทั้งหมดที่คุณต้องชำระคือ 4,044 บาท',
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
            this.router.navigate(['/go-back-receipt-ticket']);
          }
        }
      ]
    }).then(res => res.present());
  }

  ngOnInit() {
  }

}
