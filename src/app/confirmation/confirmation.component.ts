import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../node_modules/@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  minuteLisiting: Array<any>;
  selectedIndex: number;
  isValid: boolean = false;
  walletBalance: any;
  constructor(@Inject(MAT_DIALOG_DATA) public modalData: any, public dialogRef: MatDialogRef<ConfirmationComponent>,) {
    this.minuteLisiting = [
      {
        name: "5 min",
        value: 5
      },
      {
        name: "10 min",
        value: 10
      },
      {
        name: "15 min",
        value: 15,
      },
      {
        name: "20 min",
        value: 20
      }
    ]
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('walletAmount')){
      this.walletBalance = sessionStorage.getItem('walletAmount');
    }
  }

  selectList(listInfo, index){
    this.selectedIndex  = index;
    if(sessionStorage.getItem('walletAmount') && listInfo){
      let totalValue = listInfo.value * 10;
      if(totalValue < parseInt(sessionStorage.getItem('walletAmount'))) {
        this.isValid = false;
      }else {
        this.isValid = true;
      }
    }
  }


  connect(){
    this.dialogRef.close(true);
  }

}
