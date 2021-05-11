import {
  registerUser,
  getProfile,
  deleteUser,
  loginUser,
  logout,
} from "./authActions";
import { AuthProvider, useAuthDispatch, useAuthState } from "./authContext";

export {
  AuthProvider,
  useAuthState,
  useAuthDispatch,
  loginUser,
  logout,
  registerUser,
  getProfile,
  deleteUser,
};
