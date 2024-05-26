import Navbar from "../../components/layout/navbar";
import books from "../../books.json";
import SmallBookCard from "../../components/smallbookcard/SmallBookCard";

function ListPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Välkommen till listsidan!</h1>
        {books.map((book: Book) => {
          return <SmallBookCard book={book} />;
        })}
      </main>
    </>
  );
}

export default ListPage;
