import { Base_url } from "./BaseUrl";
const handleDepartmentsResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong with the Order API");
  }
  return await response.json();
};

export const GetDepartments = async () => {
  try {
    const response = await fetch(`${Base_url}/v1/department/get/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await handleDepartmentsResponse(response);
  } catch (error) {
    console.error("Department Fetch Error:", error.message);
    throw error;
  }
};

export const GetDepartmentsByName = async (name) => {
  try {
    const response = await fetch(
      `${Base_url}/v1/department/get-by-name?name=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await handleDepartmentsResponse(response);
  } catch (error) {
    console.error("Department Fetch Error:", error.message);
    throw error;
  }
};
