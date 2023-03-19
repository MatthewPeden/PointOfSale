// src/pages/admin/users.js

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Define your component for listing users by role
const UsersPage = () => {
  // Get access token from Auth hook
  const { getAccessTokenSilently } = useAuth0();

  // Define state variables for storing data and errors
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Define a function to fetch data from serverless function
  const fetchData = async () => {
    try {
      // Get access token silently
      const token = await getAccessTokenSilently();

      // Define role to filter users by
      const role = "Manager";

      // Make a GET request to serverless function with access token and role as headers
      const response = await fetch("/../api/list-users", {
        headers: {
          Authorization: `Bearer ${token}`,
          Role: role,
        },
      });

      // Parse response as JSON
      const json = await response.json();

      // Check if response is successful
      if (response.ok) {
        // Set data state variable with JSON data
        setData(json);
      } else {
        // Set error state variable with JSON error message
        setError(json.error);
      }
    } catch (error) {
      // Handle errors and set error state variable with error message
      console.error(error);
      setError(error.message);
    }
  };

  // Use useEffect hook to fetch data when component mounts or updates
  useEffect(() => {
    fetchData();
  }, []);

   return (
    <div>
      <h1>Users Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.user_id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UsersPage;