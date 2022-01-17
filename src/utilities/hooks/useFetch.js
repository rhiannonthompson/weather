import { useState } from "react";
import axios from "axios";

// rewrite from scratch 
export default function useFetch() {
 
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataOne, setDataOne] = useState(null);
  const [dataTwo, setDataTwo] = useState(null);
  

  async function submitRequest(urlOne, urlTwo = null) {
    setIsLoading(true);
    setError(null);
    setDataOne(null);
    setDataTwo(null);
    try {
      const responseOne = await axios(urlOne);
      setDataOne(responseOne.data);
      if (urlTwo) {
        const responseTwo = await axios(urlTwo);
        setDataTwo(responseTwo.data);
        // console.log(responseTwo.data);
      }
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return {
    error, isLoading, dataOne, dataTwo, submitRequest
  }
}

