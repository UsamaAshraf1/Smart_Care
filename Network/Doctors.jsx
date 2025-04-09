import { Base_url } from "./BaseUrl";
const handleDoctorsResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || "Something went wrong with the Doctor API"
    );
  }
  return await response.json();
};

export const GetDoctors = async () => {
  try {
    const response = await fetch(`${Base_url}/v1/doctor/get-all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await handleDoctorsResponse(response);
  } catch (error) {
    console.error("Department Fetch Error:", error.message);
    throw error;
  }
};
