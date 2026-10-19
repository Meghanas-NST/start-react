import type { Employee } from "./types";

export function updateSalary(
  list: Employee[],
  id: number,
  salary: number
): Employee[] {
  return list.map((employee) =>
    employee.id === id
      ? { ...employee, salary: salary }
      : employee
  );
}