import { useState, useEffect } from "react";

const student = "http://localhost:8080/data/read";

const Pro13 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {

      const response = await fetch(student);
      const final = await response.json();
      setData(final);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((items) => (
        <div >
          <h2>{items.name}</h2>
          <h2>{items.age}</h2>
        </div>
      ))}
    </div>
  );
};

export default Pro13;