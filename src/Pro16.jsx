import { useRef } from "react";

const Pro16 = () => {
  const data = useRef(null);

  const dataReader = (e) => {
    e.preventDefault();
    const value = data.current.value.trim(); // remove extra spaces

    if (value === "") {
      alert(" ☠ ︎︎!"); // ✅ prevent null/empty submission
      return;
    }

    console.log(value);
    data.current.value = ""; // ✅ clear input after submit
  };

  return (
    <div>
      <form onSubmit={dataReader}>
        <input ref={data} type="text" placeholder="Typoo !" />
        <button>Submit !</button>
      </form>
    </div>
  );
};

export default Pro16;