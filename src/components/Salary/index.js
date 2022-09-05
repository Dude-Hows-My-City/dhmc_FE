import { StyledSalary } from "../styles/Salary.styled";
import { useState } from "react";

const Salary = ({ city, selectedCities }) => {
  const [selectedJob, setSelectedJob] = useState("");

  const handleChange = (event) => {
    setSelectedJob(event.target.value);
  };
  //   console.log(selectedCities === undefined);
  return selectedCities === undefined ? (
    <StyledSalary>
      <h2>Salaries</h2>
      <select value={selectedJob} onChange={handleChange}>
        <option>--Choose A Job--</option>
        {/* map over salaries array here */}
      </select>
      <h3>Selected Job Title Here</h3>
      <h4>Average Pay</h4>
      <p>median value here</p>
    </StyledSalary>
  ) : (
    <StyledSalary>
      {/* copy logic from above and add second city's value and city titles */}
    </StyledSalary>
  );
};

export default Salary;
