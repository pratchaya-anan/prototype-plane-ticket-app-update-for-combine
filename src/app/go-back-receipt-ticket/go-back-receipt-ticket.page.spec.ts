import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoBackReceiptTicketPage } from './go-back-receipt-ticket.page';

describe('GoBackReceiptTicketPage', () => {
  let component: GoBackReceiptTicketPage;
  let fixture: ComponentFixture<GoBackReceiptTicketPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBackReceiptTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoBackReceiptTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
