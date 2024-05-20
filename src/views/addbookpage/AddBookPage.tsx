import Form from "../../components/form/Form";
import Navbar from "../../components/layout/navbar";

function AddBookPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Lägg till en bok!</h1>
        <Form />
      </main>
    </>
  );
}

export default AddBookPage;
