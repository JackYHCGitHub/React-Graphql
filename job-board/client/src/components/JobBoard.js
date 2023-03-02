import JobList from "./JobList";
import { useJobs } from "../graphql/hooks";

function JobBoard() {
  // replace getJobs()
  const { jobs, loading, error } = useJobs();

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>Sorry Something worng</p>;
  }

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
