import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoBackCheckoutTicketPage } from './go-back-checkout-ticket.page';

describe('GoBackCheckoutTicketPage', () => {
  let component: GoBackCheckoutTicketPage;
  let fixture: ComponentFixture<GoBackCheckoutTicketPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBackCheckoutTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoBackCheckoutTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
