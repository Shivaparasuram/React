import axios from "axios";
import { useState, useEffect } from "react";

const Pro15 = () => {
  const [one, setOne] = useState([]);

  useEffect(() => {
    const demoData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/data/read");
        setOne(response.data);
      } catch (error) {
        alert("Error fetching data");
      }
    };
    demoData();
  }, []);

  return (
    <div>
      {one.map((item ) => (
        <div >
          <h2>{item.name}</h2>
          <h3>{item.age}</h3>
        </div>
      ))}
    </div>
  );
};

export default Pro15;