import _ from "lodash";

export function validateLoginFields(name: string, value: string) {
  switch (name) {
    case "email":
      // Check for emptiness
      if (_.isEmpty(value)) {
        return "This field is required";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(value) ? "Enter a valid email address" : "";
    case "password":
      // Check for emptiness
      if (_.isEmpty(value)) {
        return "This field is required";
      }
      // Password must contain at least one number, one uppercase letter, and one lowercase letter
      const hasNumber = /[0-9]/.test(value);
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);

      if (!hasNumber || !hasUpperCase || !hasLowerCase || value.length < 8) {
        return "Password must be 8 characters long and contain at least one number, one uppercase letter, and one lowercase letter.";
      }
      return "";
    default:
      return "";
  }
}
