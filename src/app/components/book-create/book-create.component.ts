import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book-service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {

  bookForm = this.formBuilder.group({    
    name: '',
    price: ''
  });

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.bookService.postBook(this.bookForm);
    console.warn('Your order has been submitted', this.bookForm.value);
    this.bookForm.reset();
  }
}
