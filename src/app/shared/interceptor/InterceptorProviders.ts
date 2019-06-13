import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './JWTInterceptor';
import { HttpErrorInterceptor } from './HttpErrorInterceptor';

export const InterceptorProviders = [
         { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
         { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
       ];
