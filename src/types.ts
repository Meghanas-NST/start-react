export type EmployeeStatus = "active" | "inactive";

export type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  status: EmployeeStatus;
};