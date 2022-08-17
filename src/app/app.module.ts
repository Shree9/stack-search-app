import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AppRoutingModule, routingComponents } from '../routing/app-routing.module';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle'


@NgModule({
  // All components that make up app module
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents
  ],
  // Imports for material styles, forms, routing
  imports: [
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule, 
    MatIconModule, 
    MatToolbarModule,
    MatListModule,
    FormsModule, 
    AppRoutingModule
  ],
  // our app's service providers 
  providers: [UserService],
  // main component start with presenting this view
  bootstrap: [AppComponent]
})
export class AppModule { }
 