import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import { updateSalary } from "./employeeUtils";
import type { Employee } from "./types";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function loadEmployees() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchUsers();
        setEmployees(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  function handleSalaryUpdate(id: number, salary: number) {
    setEmployees((currentEmployees) =>
      updateSalary(currentEmployees, id, salary)
    );
  }

  if (loading) {
    return <p className="message">Loading employees...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="container">
      <h1>Employee Management</h1>
      <p className="subtitle">
        Employee Directory — Day 3 TypeScript
      </p>

      <div className="employee-list">
        {employees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <h2>{employee.name}</h2>

            <p>
              <strong>Email:</strong> {employee.email}
            </p>

            <p>
              <strong>Department:</strong> {employee.department}
            </p>

            <p>
              <strong>Salary:</strong>{" "}
              ₹{employee.salary.toLocaleString("en-IN")}
            </p>

            <p>
              <strong>Status:</strong> {employee.status}
            </p>

            <button
              onClick={() =>
                handleSalaryUpdate(
                  employee.id,
                  employee.salary + 5000
                )
              }
            >
              Increase Salary by ₹5,000
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;