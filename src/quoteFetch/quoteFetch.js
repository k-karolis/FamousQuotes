import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const QuoteFetch = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isVisible, setVisible] = useState(true);
  console.log("initial" + isVisible);
  const min = 1;
  const max = 70000;
  const interval = 10000;

  useEffect(() => {
    setInterval(function () {
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      fetch(`https://personal-mongo.herokuapp.com/quotes/${rand}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setVisible(true);
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );

      // setTimeout(function () {
      //   setVisible(false);
      // }, 1000);
    }, interval);
  }, [isLoaded]);

  if (error) {
    return <h3>Error: {error.message}</h3>;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key='1'
            initial={{
              scale: 0,
              opacity: 0,
              transition: { duration: 1 },
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 1 },
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 1 },
            }}
          >
            <h2>{items.quote}</h2>
            <h3>{items.author}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
};
export default QuoteFetch;
