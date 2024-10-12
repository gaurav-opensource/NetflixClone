import axios from "axios";//You're importing Axios, a promise-based HTTP client used to make API calls.
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
	const options = {
		headers: {
			accept: "application/json",//Specifies that the client accepts JSON response
			Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
		},
	};

	const response = await axios.get(url, options); //from api

	if (response.status !== 200) {
		throw new Error("Failed to fetch data from TMDB" + response.statusText);
	}

	return response.data; //return data
};
