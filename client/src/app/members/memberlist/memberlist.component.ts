import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Member } from '../../models/member';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  constructor(private memberservice:MembersService,private router:Router) { }
  
  dataSource = new MemberDataSource(this.memberservice);


  ngOnInit() {
    // this.memberservice.getMembers().subscribe(
    //   data => this.
    //    // {
    //     // data.forEach(item => {
    //     //   let member = new Member();
    //     //   member.memberno = item.member;
    //     //   member.name =item.name;
    //     //   member.membersince = item.membersince;
    //     //   console.log(member);
    //     //   this.membersList.push(member);
    //     // });
    //   //}
    // );
  }
  gotoNewMember(){
    this.router.navigate(['/members/addmember']);
  }
  displayedColumns: string[] = ['memberno', 'name', 'membersince'];
}

export class MemberDataSource extends DataSource<any>{
  constructor(private memberservice: MembersService) {
    super();
  }
  connect(): Observable<Member[]> {
    return this.memberservice.getMembers();
  }
  disconnect() {}
}
