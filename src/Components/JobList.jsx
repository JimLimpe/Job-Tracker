import { useState } from "react";
import useJobs from "../hooks/useJobs";
import SearchBar from "./SearchBar";
import JobResults from "./JobResults";

const JobList = () => {
  const { jobs, loading } = useJobs();
  const [query, setQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const matches = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        job.company.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(matches);

    setSuggestions(
      value.length > 0
        ? jobs
            .filter(
              (job) =>
                job.title.toLowerCase().startsWith(value.toLowerCase()) ||
                job.company.toLowerCase().startsWith(value.toLowerCase())
            )
            .slice(0, 5)
        : []
    );
  };

  const handleSearchClick = () => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
    setSuggestions([]);
  };

  const handleSuggestionClick = (job) => {
    const text = job.title;
    setQuery(text);

    const filtered = jobs.filter(
      (j) =>
        j.title.toLowerCase().includes(job.title.toLowerCase()) ||
        j.company.toLowerCase().includes(job.company.toLowerCase())
    );
    setFilteredJobs(filtered);
    setSuggestions([]);
  };

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="p-4">
      <h2 className="text-center fs-3 fw-bold mb-4">Job Listings</h2>
      <SearchBar
        query={query}
        onChange={handleSearchChange}
        onSearchClick={handleSearchClick}
        suggestions={suggestions}
        onSelect={handleSuggestionClick}
      />
      <JobResults jobs={filteredJobs.length > 0 ? filteredJobs : jobs} />
    </div>
  );
};

export default JobList;
