import { RouterModule,Routes  } from '@angular/router';
import { NgModule } from '@angular/core';


const routes : Routes = [
    { path:'', redirectTo:'dashboard',pathMatch:'full' },
    { path:'cashflow',loadChildren:'./cashflow/cashflow.module#CashflowModule'},
    { path:'members',loadChildren:'./members/member.module#MemberModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule {
}
