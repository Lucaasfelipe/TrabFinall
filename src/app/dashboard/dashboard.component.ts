import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { ModalproductComponent } from '../modalproduct/modalproduct.component';

export interface Example {
  name: string;
  position: number;
  value: string;
}

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', value: 'H' },
  { position: 2, name: 'Helium', value: 'He' },
  { position: 3, name: 'Lithium', value: 'Li' },
  { position: 4, name: 'Beryllium', value: 'Be' },
  { position: 5, name: 'Boron', value: 'B' },
  { position: 6, name: 'Carbon', value: 'C' },
  { position: 7, name: 'Nitrogen', value: 'N' },
  { position: 8, name: 'Oxygen', value: 'O' },
  { position: 9, name: 'Fluorine', value: 'F' },
  { position: 10, name: 'Neon', value: 'Ne' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: Observable<any[]>;
  title = 'loremipsum';
  displayedColumns: string[] = ['name', 'value', 'functions'];
  dataSource: any;

  constructor(private db: AngularFireDatabase,
    private dialog: MatDialog) {
    this.dataSource = this.db.list('cliente').snapshotChanges()
      .pipe(map(items => {
        return items.map(item => {
          return Object.assign({ key: item.payload.key }, item.payload.val())
        });
      }));
  }

  ngOnInit() {
  }

  insert(data = null): void {
    const dialogRef = this.dialog.open(ModalproductComponent, {
      width: '500px',
      data: { ...data, type: 'criado' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list('cliente').push(result);
      }
    });
  }

  delete(key) {
    this.db.list('cliente').remove(key)
  }

  edit(data = null) {
    const dialogRef = this.dialog.open(ModalproductComponent, {
      width: '500px',
      data: { ...data, type: 'Atualizado' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list('cliente').update(result.key, result)
      }
    });
  }

}
