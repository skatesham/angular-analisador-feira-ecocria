import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const auth = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {
      switch (error.status) {
        case 401:
          auth.logout();
          router.navigate(['/auth/login']);
          break;
        case 403:
          router.navigate(['/app/dashboard']);
          break;
        case 500:
          console.error('[HTTP 500] Internal Server Error:', error.message);
          break;
        default:
          console.error(`[HTTP ${error.status}]`, error.message);
      }
      return throwError(() => error);
    })
  );
};
