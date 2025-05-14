// components/JobResults.js
import JobCard from "./JobCard";

const JobResults = ({ jobs }) => {
  if (jobs.length === 0) return <p>No jobs found.</p>;

  return (
    <ul className="row list-unstyled">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobResults;
