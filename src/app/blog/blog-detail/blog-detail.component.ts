import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogDetailComponent implements OnInit {
  blogDetail: any;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    let blogData = this.blogService.getBlogDetail();
    if(blogData){
      this.blogDetail = blogData;
    }
  }

}
