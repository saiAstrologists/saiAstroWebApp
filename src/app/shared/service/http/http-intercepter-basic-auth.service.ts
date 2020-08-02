import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpEvent,
    HttpErrorResponse
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { AuthenticationService } from "../authentication/authentication.service";
  import { tap, retry, catchError } from 'rxjs/operators';
  import { Observable, throwError } from 'rxjs';
  import { CommonService } from '../commonService/common.service';


  @Injectable({
    providedIn: "root"
  })
  export class HttpIntercepterBasicAuthService implements HttpInterceptor {
    constructor(private _commonService: CommonService, private basicAuthenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>  {

      let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
      console.log("basicAuthHeaderString +++++++++++++ ",basicAuthHeaderString)
        // request = request.clone({
        //   setHeaders: {
        //     'Content-Type': 'application/json'
        //   }
        // });

      if (basicAuthHeaderString) {
        request = request.clone({
          setHeaders: {
            Authorization: basicAuthHeaderString,
            'Content-Type': 'application/json'
          }
        });
      } else {
        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json'
          }
        });
      }

      return next.handle(request).pipe(
        tap(
          event => this.handleResponse(request, event),
          error => this.handleError(request, error)
        )
      );
    }

    handleResponse(req: HttpRequest<any>, event) {
      if (event instanceof HttpResponse) {
           if (event.headers.get('Authorization')) {
                sessionStorage.setItem('token', event.headers.get('Authorization'));
           }
      }
    }

    handleError(req: HttpRequest<any>, error) {
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {

        // client-side error

        errorMessage = `Error: ${error.error.message}`;

      } else {

        // server-side error

        errorMessage = `Error Code: ${error.error.status}\nMessage: ${error.error.message}`;

      }

      this._commonService.tostMessage(errorMessage)


      return throwError(errorMessage);

      //   if (event instanceof HttpErrorResponse) {
      //       if(event.headers.get('Authorization')){
      //       //  console.log('handleError',event.headers.get('Authorization'));
      //           sessionStorage.setItem('token', event.headers.get('Authorization'));
      //       }
      // }
    }
  }
