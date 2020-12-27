import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog.component';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [BlogComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule
  ]
})
export class BlogModule { }
