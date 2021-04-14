import React, { useState, useEffect } from "react";

export default function QuoteFetch() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const min = 1;
  const max = 70000;
  setTimeout(function () {
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(rand);
  }, 2000);

  // useEffect(() => {
  //   fetch("https://personal-mongo.herokuapp.com/quotes/10")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>{/* <h2>{items.quote}</h2>
        <h3>{items.author}</h3> */}</ul>
    );
  }
}
