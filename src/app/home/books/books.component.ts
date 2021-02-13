import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  books: {ISBN: string, name: string, author: string, publisher: string, year: number}[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.books  = this.libraryService.books;
  }

}
