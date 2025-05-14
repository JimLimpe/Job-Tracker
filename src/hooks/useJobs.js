// hooks/useJobs.js
import { useEffect, useState } from "react";

const API_URL = "https://6820a405259dad2655ad24aa.mockapi.io/jobs/Jobs";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return { jobs, loading };
};

export default useJobs;
