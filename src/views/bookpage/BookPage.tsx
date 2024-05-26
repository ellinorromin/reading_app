import { useLocation } from "react-router";
import Navbar from "../../components/layout/navbar";
import LargeBookCard from "../../components/largebookcard/LargeBookCard";

function BookPage() {
  const location = useLocation();
  const book: Book = location.state;

  return (
    <>
      <Navbar />
      <main>
        <LargeBookCard book={book} />
      </main>
    </>
  );
}

export default BookPage;
