import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'
import { LibraryService } from '../library.service'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss']
})
export class AddBookPage implements OnInit {

  constructor(private router: Router,  private libraryService: LibraryService) { }

  ngOnInit() {
  }

  bookISBN = '';
  bookName = '';
  bookAuthor = '';
  bookPublisher = '';
  bookYear = 0;

  newBook : {ISBN: string, name: string, author: string, publisher: string, year: number}
  

  saveBook() {
    this.newBook = {
      ISBN : this.bookISBN,
      name : this.bookName,
      author : this.bookAuthor,
      publisher : this.bookPublisher,
      year : this.bookYear
    };

    console.log(this.newBook);
    
    this.libraryService.addNewBook(this.newBook);

    this.router.navigate(['/home']);
  }
}
