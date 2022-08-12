import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

import { BookService } from 'src/app/services/book-service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Observable<Book[]>;

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.books = this.bookservice.getAllBook();
  }

}
