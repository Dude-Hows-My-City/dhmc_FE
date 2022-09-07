import { StyledSalary } from "../styles/Salary.styled";
import { useState } from "react";

const Salary = ({ city, selectedCities }) => {
  const [selectedJob, setSelectedJob] = useState("");
  const [salary, setSalary] = useState("");
  const [secondSalary, setSecondSalary] = useState("");

  const handleChange = (event) => {
    setSelectedJob(event.target.value);
  };

  const handleClick = () => {
    if (selectedCities === undefined) {
      setSalary(
        city.attributes.salaries.find(
          (salary) => salary.job_title === selectedJob
        ).median_pay
      );
    } else {
      setSalary(
        selectedCities[0].attributes.salaries.find(
          (salary) => salary.job_title === selectedJob
        ).median_pay
      );
      setSecondSalary(
        selectedCities[1].attributes.salaries.find(
          (salary) => salary.job_title === selectedJob
        ).median_pay
      );
    }
  };
  return selectedCities === undefined ? (
    <StyledSalary>
      <h2 data-cy="salary-header">Salaries</h2>
      <select
        data-cy="salary-dropdown"
        value={selectedJob}
        onChange={handleChange}
      >
        <option>--Choose A Job--</option>
        {city.attributes.salaries.map((e) => {
          return (
            <option value={e.job_title}>
              {e.job_title.split("_").join(" ").toUpperCase()}
            </option>
          );
        })}
      </select>
      <button className="search-job-button" onClick={handleClick}>
        Search
      </button>
      <h3 data-cy="job-title">
        {selectedJob.split("_").join(" ").toUpperCase()}
      </h3>
      <h4 data-cy="pay-header">Average Pay</h4>
      {salary ? (
        <p data-cy="median-pay">${Math.round(salary)}/annual</p>
      ) : (
        <p>N/A</p>
      )}
    </StyledSalary>
  ) : (
    <StyledSalary>
      <h2 data-cy="salary-header">Salaries</h2>
      <select
        data-cy="salary-dropdown"
        value={selectedJob}
        onChange={handleChange}
      >
        <option>--Choose A Job--</option>
        {selectedCities[0].attributes.salaries.map((e) => {
          return (
            <option value={e.job_title}>
              {e.job_title.split("_").join(" ").toUpperCase()}
            </option>
          );
        })}
      </select>
      <button className="search-job-button" onClick={handleClick}>
        Search
      </button>
      <h3 data-cy="job-title">
        {selectedJob.split("_").join(" ").toUpperCase()}
      </h3>
      <h4 data-cy="pay-header">Average Pay</h4>
      <div className="both-titles">
        <p>{selectedCities[0].attributes.name}</p>
        <p>{selectedCities[1].attributes.name}</p>
      </div>
      <div className="both-payouts">
        {salary ? (
          <p data-cy="median-pay">${Math.round(salary)}/annual</p>
        ) : (
          <p>N/A</p>
        )}
        {salary ? (
          <p data-cy="median-pay">${Math.round(secondSalary)}/annual</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
    </StyledSalary>
  );
};

export default Salary;
