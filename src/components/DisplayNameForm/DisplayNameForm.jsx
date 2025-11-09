import React, { useState } from "react";
import styles from "./DisplayNameForm.module.css";

const DisplayNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please fill in both fields.");
      setFullName("");
      return;
    }

    setError("");
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Full Name Display</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {fullName && (
        <p className={styles.result}>
          <strong>Full Name:</strong> {fullName}
        </p>
      )}
    </div>
  );
};

export default DisplayNameForm;
