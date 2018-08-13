import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptlistComponent } from './receiptlist/receiptlist.component';


const routes: Routes = [
    { path:'', component:ReceiptlistComponent},
    { path: 'receipt', component:ReceiptComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class CashflowRoutes{

}