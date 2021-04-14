import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./quoteFetch.css";

export const QuoteFetch = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isVisible, setVisible] = useState(false);

  console.log("initial" + isVisible);
  const min = 1;
  const max = 70000;
  const interval = 15000;

  setTimeout(() => {
    setVisible(true);
  }, 2000);

  useEffect(() => {
    setInterval(function () {
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      fetch(`https://personal-mongo.herokuapp.com/quotes/${rand}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setVisible(false);
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, interval);
  }, [isLoaded]);

  if (error) {
    return <h3>Error: {error.message}</h3>;
  } else if (!isLoaded) {
    return <h1 className='loading'>Loading...</h1>;
  } else {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className='container'
            key='1'
            initial={{
              opacity: 0,
              transition: { duration: 1 },
            }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1 },
            }}
          >
            <h1 className='quote'>{items.quote}</h1>
            <h1 className='author'> — {items.author}</h1>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
};
export default QuoteFetch;
