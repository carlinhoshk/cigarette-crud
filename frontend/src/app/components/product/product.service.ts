import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //baseUrl = 'http://localhost:3001/products'
  baseUrl = 'http://localhost:8080/products'

  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  read(): Observable<Product[]>{
    //const headers = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:4201');
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  readById(id: any): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  delete(id: any): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  erroHandler(e: any): Observable<any>{
    console.log(e)
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }
}
