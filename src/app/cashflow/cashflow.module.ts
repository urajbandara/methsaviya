import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashflowRoutes } from './cashflow-routes';
import { ReceiptComponent } from './receipt/receipt.component';
import { CoreModule } from '../core/core.module';
import { ReceiptlistComponent } from './receiptlist/receiptlist.component';

@NgModule({
  imports: [
    CommonModule,
    CashflowRoutes,
    CoreModule
  ],
  declarations: [ReceiptComponent, ReceiptlistComponent]
})
export class CashflowModule { }
