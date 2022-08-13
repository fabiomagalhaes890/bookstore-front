import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book-service/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  book: Book | undefined;
  bookForm = this.formBuilder.group({    
    id: '',
    name: '',
    price: 0
  });

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    this.bookService.putBook(this.bookForm);
    console.warn('Your order has been updated', this.bookForm.value);
    this.bookForm.reset();
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('bookId'));

    this.bookService.getBookById(productIdFromRoute)
      .subscribe((data: any) => 
      { 
        this.book = data
        
        if(this.book != null)
          this.bookForm.setValue({ id: this.book.id, name: this.book.name, price: this.book.price });
      });
  }
}
