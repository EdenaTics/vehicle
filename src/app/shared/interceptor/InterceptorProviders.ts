import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './JWTInterceptor';

export const InterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }];
