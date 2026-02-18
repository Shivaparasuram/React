import { useState } from "react";

const Pro14 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const personData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/data/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Success:", result);

      // ✅ Clear inputs after successful submission
            setName("");
            setAge("");


    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={personData}>
        <label>Name :</label>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="NAME"/>
        <label>Age :</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="AGE" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Pro14;