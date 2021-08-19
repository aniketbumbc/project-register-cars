import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [showData, setShowData] = useState<boolean>(true);

  useEffect(() => {
    if (!url) return;
    fetchData(url);
  }, [url]);

  const fetchData = (url: string) => {
    axios
      .get(url)
      .then((responese) => {
        if (responese.status === 200) {
          setData(responese.data);
          setShowData(true);
        }
      })
      .catch((error) => {
        setShowData(false);
        if (error.message !== 'Network Error') {
          if (error.response.status === 503) {
            alert('Service Unavailable, Please Try Again');
          }
        } else {
          /* Handling error when 404 or others */
          alert('Something Went Wrong');
        }
      });
  };

  return { data, showData };
};
export default useFetch;
