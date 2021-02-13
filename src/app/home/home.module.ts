import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BooksComponent } from './books/books.component'
import { BookComponent } from './book/book.component'
import { AddBookPage } from './add-book/add-book.page'
import { LibraryService } from './library.service'


import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, BooksComponent, BookComponent, AddBookPage],
  providers: [LibraryService]
})
export class HomePageModule {}
