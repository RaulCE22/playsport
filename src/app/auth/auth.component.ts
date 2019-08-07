import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AuthNickNameComponent } from './auth-nickname.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form: FormGroup;

  constructor(public dialog: MatDialog, public authService: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('rce1991@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('12345678', [Validators.required, Validators.minLength(8)]),
    });
  }
  onLogin() {
    this.authService.login(this.form.value.email, this.form.value.password);
  }
  onSignup() {

    const dialogRef = this.dialog.open(AuthNickNameComponent, {
      width: '250px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.authService.signup(this.form.value.email, this.form.value.password, result);
    });
  }
}

