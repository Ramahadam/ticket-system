import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
const UsersContext = createContext();

const BASE_URL = "http://localhost:3030/users";

const initalState = {
  users: [],
  isUsersLoading: false,
  showUsersForm: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isUsersLoading: action.payload };

    case "users/loaded":
      return { ...state, users: action.payload };

    case "users/showForm":
      return { ...state, showUsersForm: !state.showUsersForm };

    default:
      throw new Error("Error action is not applicable");
  }
}

function UsersProvider({ children }) {
  const [{ users, isUsersLoading, showUsersForm, error }, dispatch] =
    useReducer(reducer, initalState);

  useEffect(function () {
    async function getUsers() {
      try {
        dispatch({ type: "loading", payload: true });
        const res = await axios.get(`${BASE_URL}`);
        const data = await res.data;
        console.log(data);
        dispatch({ type: "users/loaded", payload: data });
        dispatch({ type: "loading", payload: false });
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  }, []);

  function handleUserForm() {
    dispatch({ type: "users/showForm" });
  }

  return (
    <UsersContext.Provider
      value={{ users, isUsersLoading, showUsersForm, error, handleUserForm }}
    >
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);
  if (context === undefined)
    throw new Error(`The user context is used out of the provider scope`);
  return context;
}

export { UsersProvider, useUsers };
