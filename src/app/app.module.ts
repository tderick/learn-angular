import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLeftComponent } from './header/header-left/header-left.component';
import { HeaderRightComponent } from './header/header-right/header-right.component';
import { RightSidebarComponent } from './sidebar/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './sidebar/left-sidebar/left-sidebar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLeftComponent,
    HeaderRightComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
