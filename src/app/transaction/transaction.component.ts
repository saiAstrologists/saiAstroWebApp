import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '../../../node_modules/@angular/material/table';
import { MatPaginator } from '../../../node_modules/@angular/material/paginator';
import { PaymentService } from '../shared/service/payment/payment.service';
import * as moment from 'moment';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  displayedColumns: string[] = ['position','type', 'createdAt','updatedAt', 'amount'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public paymentService: PaymentService) { }

  ngOnInit(): void {
//     amount: 1
// astrologerId: "a01"
// createdAt: "2021-01-29T14:17:59.561Z"
// duration: 1
// type: "chat"
// updatedAt: "2021-01-29T14:17:59.561Z"
// userId: "u002"

    this.getList();
  }

  
  // filter data table start

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //filter data table end

  
  getList(){
    let getUserData = JSON.parse(sessionStorage.getItem('userData'));
    let reqData = '';
    if(getUserData && getUserData.userType && getUserData.userType == 1) {
      reqData = 'userId='+ getUserData.userId;
    }else {
      reqData = 'astrologerId='+ getUserData.userId;
    }
    this.paymentService.viewTransaction(reqData).subscribe((res: any) => {
      console.log(res, 'response');
      if(res) {
        if(res && res.length) {
          res.forEach(list => {
            if(list) {
              list['createdAt'] = moment(list['createdAt']).format('DD/MM/YYYY');
              list['updatedAt'] = moment(list['updatedAt']).format('DD/MM/YYYY');
            }
          });
        }
        this.dataSource =  new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

}
