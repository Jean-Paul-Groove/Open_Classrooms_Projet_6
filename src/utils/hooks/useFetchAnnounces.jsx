import { useState, useEffect } from 'react';

export function useFetchAnnounces() {
  const [announces, setAnnounces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchAnnounces() {
      setIsLoading(true);
      try {
        const response = await fetch('../announces.json');
        const announces = await response.json();
        setAnnounces(announces);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAnnounces();
  }, []);
  return { isLoading, announces };
}
