export class LibraryService {

    books: {ISBN: string, name: string, author: string, publisher: string, year: number}[] = [
        {ISBN : '111-000-1111',
        name: 'Onegin',
        author : 'Pushkin',
        publisher : 'MoscowBookHome',
        year : 1854
        }, 
        {ISBN : '222-000-1111',
        name: 'Onegin',
        author : 'Pushkin',
        publisher : 'MoscowBookHome',
        year : 1854
        }, 
        {ISBN : '333-000-1111',
        name: 'Onegin',
        author : 'Pushkin',
        publisher : 'MoscowBookHome',
        year : 1854
        }
      ];

      addNewBook(book : {ISBN: string, name: string, author: string, publisher: string, year: number}) {
        this.books.push(book);
      }

      deleteBook(index: number){
        this.books.splice(index, 1);
      }

}