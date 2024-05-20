import "./form.scss";

function Form() {
  return (
    <form>
      <div className="inputContainer--small">
        <h2>Title:</h2>
        <input type="text" />
      </div>

      <div className="inputContainer--small">
        <h2>By:</h2>
        <input type="text" />
      </div>
      <div className="inputContainer--small">
        <h2>Started book:</h2>
        <input type="date" />
      </div>
      <div className="inputContainer--small">
        <h2>Finished book:</h2>
        <input type="date" />
      </div>
      <div className="inputContainer--large">
        <h2>What is the book about?</h2>
        <input type="text" />
      </div>
      <div className="inputContainer--large">
        <h2>What are your thoughts about the book?</h2>
        <input type="text" />
      </div>
      <div className="inputContainer--large">
        <h2>How did you come across this book?</h2>
        <input type="text" />
      </div>
      <div className="inputContainer--large">
        <h2>What did you think about this book?</h2>
        <input type="text" />
      </div>
      <div className="inputContainer--large">
        <h2>What are some questions you have about the book?</h2>
        <input type="text" />
      </div>
    </form>
  );
}

export default Form;
