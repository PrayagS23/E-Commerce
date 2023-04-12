import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderComponent } from 'src/app/layouts/header/header.component';
import { NavBarComponent } from 'src/app/layouts/navbar/navbar.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
})
export class HomePageModule { }
