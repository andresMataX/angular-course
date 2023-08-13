import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interface/auth.interface';
import { tap, Observable, of, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth() {
    return { ...this._auth }
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> {

    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseURl}/usuarios/1`)
      .pipe(
        map(auth => {
          this._auth = auth
          return true;
        })
      )

  }

  login() {
    return this.http.get<Auth>(`${this.baseURl}/usuarios/1`)
      .pipe(
        tap(resp => this._auth = resp),
        tap(resp => localStorage.setItem('token', resp.id.toString())),
      );
  }

  logout() {
    this._auth = undefined;
  }
}
