import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {ToastrService } from 'ngx-toastr';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   return next.handle(request)
     .pipe(
       retry(1),
       catchError((error: HttpErrorResponse) => {
         let errorMessage = '';
         let errorTitle = '';
         if (error.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = `Error: ${error.error.message}`;
           errorTitle = 'Error';
         } else {
           // server-side error
           errorTitle = 'Error server';
           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
         }
         this.toastService.error(errorMessage, errorTitle, { positionClass: 'toast-top-right' });
         return throwError(errorMessage);
       })
     );
  }
}
