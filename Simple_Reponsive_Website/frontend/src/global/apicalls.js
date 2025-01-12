import axios from "axios";
import { apikeys, URI } from "./apikeys";

axios.create({
  baseURL: URI,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const userMessage = (data) => axios.post(apikeys.usermessage, data);
