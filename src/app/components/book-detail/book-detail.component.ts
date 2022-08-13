import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book-service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  Remove(book: Book) {
    this.bookService.deleteBook(book.id);
    window.alert('Your book has been removed.');
    this.router.navigateByUrl('');
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('bookId'));

    this.bookService.getBookById(productIdFromRoute).subscribe((data: any) => { this.book = data });
  }

}
