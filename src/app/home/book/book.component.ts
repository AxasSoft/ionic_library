import { Component, Input } from '@angular/core';
import { LibraryService } from '../library.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent{

  @Input('bookItem')  book : {ISBN: string, name: string, author: string, publisher: string, year: number};
  @Input('bookIndex')  index : number;

  constructor(private libraryService: LibraryService) { }

  deleteThisBook(){
    this.libraryService.deleteBook(this.index);
  }
}
