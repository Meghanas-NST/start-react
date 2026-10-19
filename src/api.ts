import type { Employee } from "./types";

export async function fetchUsers(): Promise<Employee[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  const users: { id: number; name: string; email: string }[] =
    await response.json();

  const employees: Employee[] = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    department: "IT",
    salary: 30000,
    status: "active",
  }));

  return employees;
}