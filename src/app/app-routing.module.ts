import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgottpasswordComponent } from './forgottpassword/forgottpassword.component';
import { ComposemailComponent } from './composemail/composemail.component';
import { RecievedmailComponent } from './recievedmail/recievedmail.component';
import { DeletedItemsComponent } from './deleted-items/deleted-items.component';
import { SentItemsComponent } from './sent-items/sent-items.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'forgottpassword' , component: ForgottpasswordComponent},
  { path: 'composemail' , component: ComposemailComponent},
  { path: 'recievedemail' , component: RecievedmailComponent},
  { path: 'deleteditems' , component: DeletedItemsComponent},
  { path: 'sentitems' , component: SentItemsComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
