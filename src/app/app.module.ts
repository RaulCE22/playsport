import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatBadgeModule, MatExpansionModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthNickNameComponent } from './auth/auth-nickname.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EventComponent } from './event/event.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthNickNameComponent,
    LoadingComponent,
    HomeComponent,
    HeaderComponent,
    EventComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ANGULAR
    ReactiveFormsModule,
    HttpClientModule,
    //MATERIAL
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatBadgeModule,
    MatExpansionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthNickNameComponent,
    LoadingComponent
  ]
})
export class AppModule { }
