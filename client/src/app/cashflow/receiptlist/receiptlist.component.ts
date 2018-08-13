import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  receiptno: string;
  name: string;
  amount: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {receiptno: '0001', name: 'Chinthaka Bandara', amount: 1.0079, date: '2018-07-02'},
  {receiptno: '0002', name: 'Kosala Edirisingha', amount: 4.0026, date: '2018-07-02'},
  {receiptno: '0003', name: 'Chenuka Jayanath', amount: 6.941, date: '2018-07-02'},
  {receiptno: '0004', name: 'Manjula Ranasinhe', amount: 9.0122, date: '2018-07-02'},
  {receiptno: '0005', name: 'Chenuka Jayanath', amount: 10.811, date: '2018-07-02'},
  {receiptno: '0006', name: 'Monika Damayanthi', amount: 12.0107, date: '2018-07-02'},
  {receiptno: '0007', name: 'Chenuka Jayanath', amount: 14.0067, date: '2018-07-02'},
  {receiptno: '0008', name: 'Menura Dias', amount: 15.9994, date: '2018-07-02'},
  {receiptno: '0009', name: 'Indika Chaminda', amount: 18.9984, date: '2018-07-02'},
  {receiptno: '0010', name: 'Chandima Marasinha', amount: 20.1797, date: '2018-07-02'},
];

@Component({
  selector: 'app-receiptlist',
  templateUrl: './receiptlist.component.html',
  styleUrls: ['./receiptlist.component.css']
})

export class ReceiptlistComponent implements OnInit {
  displayedColumns: string[] = ['receiptno', 'name', 'amount', 'date'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoNewReceipt(){
    this.router.navigate(['/cashflow/receipt']);
  }

}
