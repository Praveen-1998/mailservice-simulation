import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ForgottpasswordComponent } from './forgottpassword/forgottpassword.component';
import { ComposemailComponent } from './composemail/composemail.component';
import { RecievedmailComponent } from './recievedmail/recievedmail.component';
import { DeletedItemsComponent } from './deleted-items/deleted-items.component';
import { SentItemsComponent } from './sent-items/sent-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ForgottpasswordComponent,
    ComposemailComponent,
    RecievedmailComponent,
    DeletedItemsComponent,
    SentItemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
