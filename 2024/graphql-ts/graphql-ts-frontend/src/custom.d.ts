declare type BookStatus = "Available" | "Maintenance" | "Loaned" | "Reserved";

interface Author {
  id: string;
  firstName: string;
  familyName: string;
  dateOfBirth: string | null;
  dateOfDeath: string | null;
}

interface Book {
  id: string;
  title: string;
  authorId: number;
  summary: string;
  isbn: string;
}

interface BookInstance {
  id: string;
  bookId: number;
  imprint: string;
  status: BookStatus | null;
  dueBack: string | null;
}

interface Genre {
  id: string;
  name: string;
}

declare interface IndexApiData {
  bookCount: number;
  bookInstanceCount: number;
  bookInstanceAvailableCount: number;
  authorCount: number;
  genreCount: number;
}

declare interface AuthorListApiData {
  authorList: Author[];
}

declare interface AuthorDetailApiData {
  author: Author;
  authorsBooks: Pick<Book, "id" | "title" | "summary">[];
}

declare interface BookListApiData {
  bookList: (Pick<Book, "id" | "title"> & { author: Author })[];
}

declare interface BookDetailApiData {
  book: Book & { author: Author; genres: Genre[] };
  bookInstances: BookInstance[];
}

declare interface BookInstanceListApiData {
  bookInstanceList: (BookInstance & { book: Book })[];
}

declare interface BookInstanceDetailApiData {
  bookInstance: BookInstance & { book: Book };
}

declare interface GenreListApiData {
  genreList: Genre[];
}

declare interface GenreDetailApiData {
  genre: Genre;
  genreBooks: Book[];
}
