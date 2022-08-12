import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/models/book';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'https://localhost:7235/api/';

  constructor(private http: HttpClient) { }

  getBookById(id: string){
    var result = this.http.get<Book>(this.url + 'books/' + id);
    return result;
  }

  getAllBook() {
    var result = this.http.get<Book[]>(this.url + 'books');
    return result;
  }

  postBook(formGroup: FormGroup) {
    var book = {
      name: formGroup.value.name,
      price: formGroup.value.price
    };

    var result = this.http
                  .post(this.url + 'books', book)
                  .subscribe({
                    next: (response) => console.log('success', response),
                    error: (error) => console.log('error', error),
                  });
    return result;
  }

  putBook(formGroup: FormGroup) {
    var book = {
      id: formGroup.value.id,
      name: formGroup.value.name,
      price: formGroup.value.price
    };
    console.log('udpate', book);
    var result = this.http
                  .put(this.url + 'books', book)
                  .subscribe({
                    next: (response) => console.log('success', response),
                    error: (error) => console.log('error', error),
                  });
    return result;
  }

  deleteBook(id: string) {
    this.http
      .delete(this.url + 'books/' + id)
      .subscribe({
        next: (response) => console.log('success', response),
        error: (error) => console.log('error', error),
      });
  }
}
