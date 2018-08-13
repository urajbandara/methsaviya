import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmemberComponent } from './addmember/addmember.component';
import { MemberlistComponent } from './memberlist/memberlist.component';


const routes: Routes = [
    { path: '', component: MemberlistComponent },
    { path: 'addmember', component: AddmemberComponent ,outlet:'details' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MemberRoutes {

}