import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BmsService {
  constructor(private http: HttpClient) { }

  API = 'http://localhost:8085/api'



  // ---------------------------------------------------------------------------------------------
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }



  // -----------------------------------------------------------------------------------------------

  public servicecreatebook(book: any): Observable<any> {
    return this.http.post(this.API + `/createbook`, book).pipe(
      catchError(this.handleError)
    );
  }
  public servicefetchbyidbook(b_id: number): Observable<any> {
    return this.http.get(this.API + `/getbyidbook/` + b_id);

  }

  public serviceupdatebook(book_id: number, updatebookForm: any): Observable<any> {
    if (!book_id) {
      // Handle the error or return an observable with an error
      return throwError('Invalid book ID');
    }

    const url = `${this.API}/updatebookbyid/${book_id}`;
    return this.http.put<any>(url, updatebookForm);
  }

  public servicedeletebyidbook(b_id: any): Observable<any> {
    return this.http.delete(this.API + `/deletebookbyid/` + b_id);
  }

  public servicegetAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.API + `/getallbooks`);
  }


  // -----------------------------------------------------------------------------------------------

  public servicecreateauthor(author: any): Observable<any> {
    return this.http.post(this.API + '/createauthor', author)
  }

  // public serviceupdateauthor(author: any): Observable<any> {
  //   return this.http.put(this.API + `/updatebyidauthor/`, author)
  // }


  public serviceupdateauthor(author_id: any, updateauthorForm: any): Observable<any> {
    if (!author_id) {
      // Handle the error or return an observable with an error
      return throwError('Invalid book ID');
    }

    const url = `${this.API}/updatebyidauthor/${author_id}`;
    return this.http.put<any>(url, updateauthorForm);
  }


  public servicefetchbyidauthor(a_id: number): Observable<any> {
    return this.http.get(this.API + `/getbyidauthor/` + a_id);
  }

  public servicedeletebyidauthor(a_id: any): Observable<any> {
    return this.http.delete(this.API + `/deletebyidauthor/` + a_id);
  }

  public servicegetAllauthors(): Observable<any[]> {
    return this.http.get<any[]>(this.API + `/getallauthors`);
  }



  // -----------------------------------------------------------------------------------------------

}
