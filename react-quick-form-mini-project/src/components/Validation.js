import isValidEmail from "../utils/ValidateEmail";

export function validateForm({ name, email, selectedMovie }) {
  let errors = {};

  if (!name) {
    errors.name = "โปรดใส่ชื่อของคุณ";
  }

  if (!email) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (!isValidEmail(email)) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }

  if (!selectedMovie) {
    errors.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
  }

  return errors;
}
