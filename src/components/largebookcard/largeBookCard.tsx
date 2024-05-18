import "./largebookcard.scss";

function LargeBookCard({ book }: BookProp) {
  return (
    <section className="largeBookCard">
      <img src={book.cover} alt={`${book.title} cover image`} />
      <div className="largeBookCardInfo">
        <h1>{book.title}</h1>
        <h2>by {book.author}</h2>
        <p>{book.userComments.plot}</p>
      </div>
    </section>
  );
}

export default LargeBookCard;
