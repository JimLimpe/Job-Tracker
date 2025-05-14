const JobCard = ({ job }) => {
  return (
    <li className="list-unstyled border p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <div className="mt-2">
        <strong>Requirements:</strong>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Education: {job.education}</li>
          <li>Experience: {job.experience}</li>
        </ul>
      </div>
      <div className="mt-2">
        <strong>Benefits:</strong>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Salary: {job.salary}</li>
          <li>Bonus: {job.bonus}</li>
        </ul>
      </div>
    </li>
  );
};

export default JobCard;
