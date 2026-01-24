import axios from "axios";

function fetchClientsApi(query: string) {
  // Use JSONPlaceholder API for testing
  return axios.get(`https://jsonplaceholder.typicode.com/users`, {
    params: { q: query }, // Add query parameter for filtering (if needed)
  });
}

export { fetchClientsApi };