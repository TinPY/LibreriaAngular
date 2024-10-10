import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'lib-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {

  color = "primary";
  mode = "indeterminate";

  constructor(public dialogRef: MatDialogRef<LoadingComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog
  ) {
    this.data = data;
  }

  ngOnInit(): void {
  }

}
