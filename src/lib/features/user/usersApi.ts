import axios from "axios";
import { User } from "./usersSlice";

const fetchUsersApi =() => {
    return axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
};

export { fetchUsersApi };
  