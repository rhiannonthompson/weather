import { useState } from "react";
import axios from "axios";


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
      const responseOne = await axios(urlOne); // lambda function call - weather.js
      setDataOne(responseOne.data);
      if (urlTwo) {
        const responseTwo = await axios(urlTwo); // lambda function call -forecast.js
        setDataTwo(responseTwo.data);
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

