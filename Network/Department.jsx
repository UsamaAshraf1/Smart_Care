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
    const response = await fetch(
      `${Base_url}/orderLogs/api/orders/${id}/comments/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return await handleDepartmentsResponse(response);
  } catch (error) {
    console.error("Comment Add Error:", error.message);
    throw error;
  }
};
