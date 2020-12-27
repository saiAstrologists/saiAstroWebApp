import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { RestService } from '../shared/service/restApi/rest.service';
import { RestUrl } from '../shared/constant/rest-url.constants';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogData: any;
  constructor(private restService: RestService) { }

  blogList(): Observable<any> {
    return this.restService.get(RestUrl.blogList);
  }

  getBlogDetail(){
    return this.blogData;
  }

  setBlogDetail(data){
    this.blogData = data;
  }
}
