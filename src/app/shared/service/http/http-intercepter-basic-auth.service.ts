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
  import { tap } from 'rxjs/operators';

  @Injectable({
    providedIn: "root"
  })
  export class HttpIntercepterBasicAuthService implements HttpInterceptor {
    constructor(private basicAuthenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
      let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
      console.log("basicAuthHeaderString +++++++++++++ ",basicAuthHeaderString)
        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json'
          }
        });

      // if (basicAuthHeaderString) {
      //   request = request.clone({
      //     setHeaders: {
      //       Authorization: basicAuthHeaderString,
      //       'Content-Type': 'application/json'
      //     }
      //   });
      // } else {
      //   request = request.clone({
      //     setHeaders: {
      //       'Content-Type': 'application/json'
      //     }
      //   });
      // }
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

    handleError(req: HttpRequest<any>, event) {

        if (event instanceof HttpErrorResponse) {
            if(event.headers.get('Authorization')){
            //  console.log('handleError',event.headers.get('Authorization'));
                sessionStorage.setItem('token', event.headers.get('Authorization'));
            }
      }
    }
  }
