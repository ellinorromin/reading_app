import "./smallBookCard.scss";
import { useNavigate } from "react-router";

function SmallBookCard({ book }: BookProp) {
  const navigate = useNavigate();
  return (
    <section className="smallBookCard">
      <img src={book.cover} alt={`Cover image for ${book.title}`} />
      <div className="smallBookCardInfo">
        <h1
          onClick={() => {
            navigate("book", { state: book });
          }}
        >
          {book.title}
        </h1>
        <h3>by {book.author}</h3>
        <p>{book.userComments.plot}</p>
      </div>
    </section>
  );
}

export default SmallBookCard;
