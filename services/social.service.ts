import axios from "axios";
import { SocialModel } from "../models/social.model";
const baseurl = process.env.server || "http://localhost:3000/api/";

export const GetSocials = () => {
  return axios.get(`${baseurl}social`);
};

export const CreateSocials = (data: SocialModel) => {
  return axios.post(`${baseurl}social`, data);
};
