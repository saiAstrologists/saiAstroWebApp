import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from './blog.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {
  blogList: Array<any>;

  constructor(private blogService: BlogService, private route: Router) { }

  ngOnInit(): void {
    this.getBlogList();
  }

  // blogList(): Observable<any> {
  //   return this.restService.get(RestUrl.blogList);
  // }

  
  getBlogList(){
    this.blogService.blogList().subscribe(response => {
      if(response){
        this.blogList = response;
      }        
    }) 
  }

  viewBlogDetail(list){
    this.blogService.setBlogDetail(list);
    this.route.navigate(['blog/blog-detail']);
  }

}
