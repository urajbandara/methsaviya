import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  arr: Array<{memberno: string, name: string}> = [
    {memberno: "30-4200", name : "Namal Gunawardana"},
    {memberno: "18-3028", name: "Chinthaka Bandara"},
    {memberno: "18-2422", name: "M.K Priyantha"},
    {memberno: "35-5457", name: "Chenuka Jayasuriya"},
  ];
  membername:string;
  constructor() { }

  ngOnInit() {
  }


  findMember(event:any){
    var member = this.arr.filter(m=>m.memberno === event.value);
    console.log(member);
  }

  save(){

  }

  dismiss(){
    
  }


  

}
