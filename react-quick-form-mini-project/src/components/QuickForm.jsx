import { useState } from "react";
import movies from "../constants/MovieArray";
import { validateForm } from "./Validation";
import FormField from "./FormField";
import MovieList from "./MovieList";

function QuickForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  function resetForm() {
    setName("");
    setEmail("");
    setSelectedMovie("");
    setComment("");
    setErrors({});
    setSubmittedData(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm({ name, email, selectedMovie });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    let newFormData = {
      name,
      email,
      movie: selectedMovie,
      comment,
    };

    setSubmittedData(newFormData);
      setName("");
    setEmail("");
    setSelectedMovie("");
    setComment("");
    setErrors({});
  }

  if (submittedData) {
    return (
      <div className="submitted-page">
        <h2>ฟอร์มถูกส่งเรียบร้อยแล้ว ✅</h2>
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        <button onClick={() => setSubmittedData(null)}>กรอกใหม่</button>
      </div>
    );
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <FormField label="Name :" id="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter name here"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormField>

      <FormField label="Email :" id="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormField>

      <MovieList
        movies={movies}
        selectedMovie={selectedMovie}
        onChange={setSelectedMovie}
        error={errors.selectedMovie}
      />

      <FormField label="Comment :" id="comment">
        <textarea
          id="comment"
          name="comment"
          placeholder="Enter comment here"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          rows={4}
          cols={60}
        />
      </FormField>

      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default QuickForm;
