import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  // getCursos(): Curso[] {
  //   return COURSES;
  // }

  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>('assets/api/courses.json')
    .pipe(
      catchError( this.manejarError )
    )
  }

  manejarError( error: HttpErrorResponse ) {
    if (error.error instanceof ErrorEvent) {
      console.log('Error de cliente', error.error.message);
    } else {
      console.log('Error Status: ', error.status);
      console.log('Error: ', error.error);
    }
    return throwError('Hubo un problema al obtener los datos. Intente más tarde');
  }
}
