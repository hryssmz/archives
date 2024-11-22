// utils/constants.ts
export const dummyAuthor: Author = {
  id: "",
  firstName: "",
  familyName: "",
  dateOfBirth: null,
  dateOfDeath: null,
};

export const dummyBook: Book = {
  id: "",
  title: "",
  authorId: -1,
  summary: "",
  isbn: "",
};

export const dummyBookInstance: BookInstance = {
  id: "",
  bookId: -1,
  imprint: "",
  status: null,
  dueBack: null,
};

export const dummyGenre: Genre = {
  id: "",
  name: "",
};
