/**
 * Created by mlingolu on 11/18/16.
 */

import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";

import 'rxjs';
import {Observable} from "rxjs";

@Injectable()

export class MovieService {

  constructor(public http: Http) {

  }

  getMovieDetails(movieId): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6c25354b29a2476834f44f4fe46b45e8`)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
  }
  getMovies(genreId): Observable<any> {
      return this.http.get(`https://api.themoviedb.org/3/genre/${genreId}/movies?api_key=6c25354b29a2476834f44f4fe46b45e8&language=en-US&include_adult=true&sort_by=created_at.asc`)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getGenres(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6c25354b29a2476834f44f4fe46b45e8&language=en-US')

      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

}
