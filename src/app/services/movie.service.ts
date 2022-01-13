import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { MovieDetails, Results } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = 'https://api.themoviedb.org/3/'
  api_key = '68aa8f3d60f090a9112e6c7e0d57a09b'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getMovies(type: string, page: number): Observable<Results> {
    return this.httpClient.get<Results>(this.apiUrl + `movie/${type}?page=${page}&api_key=` + this.api_key)
  }

  public getMoviesByName(name: string, page: number): Observable<Results> {
    return this.httpClient.get<Results>(this.apiUrl + `search/movie?query=${name}&page=${page}&api_key=` + this.api_key)
  }

  public getMovieDetails(id: number): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(this.apiUrl + `movie/${id}?api_key=` + this.api_key)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.router.navigateByUrl('/page-not-found')
          return throwError(() => err)
        })
      )
  }
}
