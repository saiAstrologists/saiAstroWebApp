import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saiAstroWorld';
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(public dialog: MatDialog){}

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}
