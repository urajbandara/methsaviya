import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddmemberComponent } from './addmember/addmember.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { CoreModule } from '../core/core.module';
import { MemberRoutes } from './member-routes';
import { MembersService } from './services/members.service';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutes,
    CoreModule
  ],
  declarations: [AddmemberComponent, MemberlistComponent],
  providers:[MembersService]
})
export class MemberModule { }
