import Navbar from "../../components/layout/navbar";
import "./homepage.scss";
import books from "../../books.json";
import SmallBookCard from "../../components/smallbookcard/SmallBookCard";

function HomePage() {
  const currentlyReading: Book[] = books.filter((book) => {
    return book.status === "currently reading";
  });

  console.log(currentlyReading);

  return (
    <>
      <Navbar />
      <main>
        <h1>Current books:</h1>
        <section className="displayCurrentBooksContainer">
          {currentlyReading.map((book) => {
            return <SmallBookCard book={book} />;
          })}
        </section>
      </main>
    </>
  );
}

export default HomePage;
