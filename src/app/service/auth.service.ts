import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Links } from '../links.module';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authKey': 'a22f96db8bddb95ad0dc60dad56aaed6',
    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU2ZGQxNzM2ZjhkMDAxNjFlNWU3MiIsInVzZXJJZCI6IjYyMGU2ZGQxNzM2ZjhkMDAxNjFlNWU3MiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiZmlyc3ROYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6Im9uZSIsInBob25lTnVtYmVyIjoiODk4ODc0NTU4NSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0NTE3NTI3MSwiZXhwIjoxNjQ1MjYxNjcxfQ.CUXiGKtN4lvnCorLqvSocerPgUhvNjkVje0WWpXElzw',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private toastr: ToastrService,
    private http: HttpClient) { }

  login(data: any) {
    return this.http.post(Links.LOGIN, data, httpOptions)
      .pipe(map((response: any) => response));
  }

  dashboardCount() {
    return this.http.get(Links.DASHBOARD_COUNT, httpOptions)
      .pipe(map((response: any) => response));
  }

  getAllUsers(data: any) {
    return this.http.get(Links.USER_LIST,  httpOptions)
      .pipe(map((response: any) => response));
  }

  updateUserStatus(id: any, status: any) {
    return this.http.post(Links.UPDATE_USER_STATUS + '?uuid=' + id + '&status=' + status, {}, httpOptions)
      .pipe(map((response: any) => response));
  }

  changePassword(data: any) {
    return this.http.post(Links.CHANGE_PASSWORD, data, httpOptions)
      .pipe(map((response: any) => response));
  }

  forgotPassword(email: any) {
    return this.http.post(Links.FORGOT_PASSWORD + '?email=' + email, {}, httpOptions)
      .pipe(map((response: any) => response));
  }

  resetPassword(data: any, reqType: any) {
    if (reqType) {
      return this.http.post(Links.USER_RESET_PASSWORD, data, httpOptions)
        .pipe(map((response: any) => response));
    } else {
      return this.http.post(Links.RESET_PASSWORD, data, httpOptions)
        .pipe(map((response: any) => response));
    }
  }

  verifyRequest(type: any, token: any, reqType: any) {
    if (reqType) {
      return this.http.post(Links.USER_VERIFY_REQUEST + '?type=' + type + '&token=' + token, {}, httpOptions)
        .pipe(map((response: any) => response));
    } else {
      return this.http.post(Links.VERIFY_RESET_PASSWORD_REQUEST + '?type=' + type + '&token=' + token, {}, httpOptions)
        .pipe(map((response: any) => response));
    }
  }

  getUser(uuid:any) {
    return this.http.post(Links.GET_USER_DETAIL+'?uuid='+uuid,{},httpOptions)
       .pipe(map((response: any) => response));
  }

}
