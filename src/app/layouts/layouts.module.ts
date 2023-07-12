import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Language
import { TranslateModule } from '@ngx-translate/core';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

// Offcanvas
import { NgxAsideModule } from 'ngx-aside';

// Component
import { LayoutComponent } from './layout.component';
import { VerticalComponent } from './vertical/vertical.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    VerticalComponent,
    FooterComponent,
    TopbarComponent,

    SidebarComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SimplebarAngularModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgxAsideModule
  ],
  providers: [],
})
export class LayoutsModule { }
