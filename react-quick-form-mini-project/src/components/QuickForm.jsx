import { useState } from "react";
import movies from "../constants/MovieArray";
import isValidEmail from "../utils/ValidateEmail";

function QuickForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("")
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    let newErrors = {};
    if (!name) {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    }
    if (!email) {
        {
          newErrors.email = "โปรดใส่อีเมลของคุณ";
        }
      } else if (!isValidEmail(email)) {
        newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!selectedMovie) {
      newErrors.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length
  }

  function resetForm() {
    setName("");
    setEmail("");
    setSelectedMovie("");
    setComment("");
    setErrors({});
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm() !== 0) {
      return;
    }

    let newFormData = {
      name: name,
      email: email,
      movie: selectedMovie,
      comment: comment,
    };

    alert(JSON.stringify(newFormData));

    resetForm();
  }
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label>
          Name : 
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          />
        </label>
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
 
      <div className="input-container">
        <label>
          Email :
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email here"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </label>
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <label>Your Favorite movie :</label>
      <div className="input-container">
        {movies.map((movie) => (
          <label key={movie.title}>
            <input
              type="radio"
              name="option"
              value={movie.title}
              checked={selectedMovie === movie.title}
              onChange={(event) => setSelectedMovie(event.target.value)}
              required
            />
            <p>Movie: {movie.title} || Year: {movie.year} || Director: {movie.director}</p>
          </label>
          
        ))}
      <p className="show-message">Selected: {selectedMovie || "None"}</p>
      {errors.selectedMovie && <p className="error-message">{errors.selectedMovie}</p>}
      </div>

      <div className="input-container">
        <label>
          Comment :
          <textarea
            id="comment"
            name="comment"
            placeholder="Enter comment here"
            onChange={(event) => setComment(event.target.value)}
            value={comment}
            rows={4}
            cols={60}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </div>
    </form>
  );
}

export default QuickForm;
