import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './auth-nickname.component.html',
  styleUrls: ['./auth-nickname.component.css']
})
export class AuthNickNameComponent implements OnInit {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AuthNickNameComponent>) { }
  ngOnInit() {
    this.form = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  onNickName(): void {
    this.dialogRef.close(this.form.value.nickname);
  }
}
