import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-astro-question',
  templateUrl: './astro-question.component.html',
  styleUrls: ['./astro-question.component.scss']
})
export class AstroQuestionComponent implements OnInit {
  displayedColumns: string[] = ['edit','id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  mode = new FormControl('over');

  users: UserData[] = [
    {id: '1', name: 'Maia', progress: '20', color: 'maroon' },
    {id: '2', name: 'Asher', progress: '20', color: 'maroon' },
    {id: '3', name: 'Olivia', progress: '20', color: 'maroon' },
    {id: '4', name: 'Atticus', progress: '20', color: 'maroon' },
    {id: '5', name: 'Amelia', progress: '20', color: 'maroon' },
    {id: '6', name: 'Jack', progress: '20', color: 'maroon' },
    {id: '7', name: 'Charlotte', progress: '20', color: 'maroon' },
    {id: '8', name: 'Theodore', progress: '20', color: 'maroon' },
    {id: '9', name: 'Isla', progress: '20', color: 'maroon' },
    {id: '10', name: 'Oliver', progress: '20', color: 'maroon' },
    {id: '11', name: 'Isabella', progress: '20', color: 'maroon' },
    {id: '12', name: 'Jasper', progress: '20', color: 'maroon' },
    {id: '13', name: 'Cora', progress: '20', color: 'maroon' },
    {id: '14', name: 'Levi', progress: '20', color: 'maroon' },
    {id: '15', name: 'Violet', progress: '20', color: 'maroon' },
    {id: '16', name: 'Arthur', progress: '20', color: 'maroon' },
    {id: '17', name: 'Mia', progress: '20', color: 'maroon' },
    {id: '18', name: 'Thomas', progress: '20', color: 'maroon' },
    {id: '19', name: 'Elizabeth', progress: '20', color: 'maroon' },
    {id: '20', name: 'Oliver', progress: '20', color: 'maroon' },
    {id: '21', name: 'Arthur', progress: '20', color: 'maroon' },
    {id: '22', name: 'Levi', progress: '20', color: 'maroon' },
    {id: '23', name: 'Thomas', progress: '20', color: 'maroon' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editQuestion(reference,data){
    reference.toggle();
    console.log("Side bar data", data);
  }


}
