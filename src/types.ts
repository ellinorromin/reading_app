interface Book {
  title: string;
  author: string;
  status: string;
  cover: string;
  userComments: UserComments;
}

interface BookProp {
  book: Book;
}

interface UserComments {
  plot: string;
  startedReading: string;
  finishedReading: string;
}
