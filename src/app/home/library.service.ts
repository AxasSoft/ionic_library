export class LibraryService {

    books: {ISBN: string, name: string, author: string, publisher: string, year: number}[] = [
        {ISBN : '111-000-1111',
        name: 'Evgeniy Onegin',
        author : 'Pushkin Aleksander',
        publisher : 'GreenPrint',
        year : 1830
        }, 
        {ISBN : '222-000-1111',
        name: 'War & Peace World',
        author : 'graf Leo Tolstoy',
        publisher : 'MoscowBookHome',
        year : 1869
        }, 
        {ISBN : '333-000-1111',
        name: 'The Fellowship of The Ring',
        author : 'J.R.R. Tolkien',
        publisher : 'George Allen & Unwin',
        year : 1954
        }
      ];

      addNewBook(book : {ISBN: string, name: string, author: string, publisher: string, year: number}) {
        this.books.push(book);
      }

      deleteBook(index: number){
        this.books.splice(index, 1);
      }

}