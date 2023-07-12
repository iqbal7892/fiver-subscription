import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
