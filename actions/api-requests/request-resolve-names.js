import axios from "axios";
import _ from "lodash";
const apiEndPoint = process.env.apiEndPoint;

export const requestResolveNames = (queryNames) => {
  // query object sent to the api
  const queryObject = {
    opts: {
      mode: "resolve",
      batches: 1,
    },
    data: queryNames,
  };
  // sending the request to the API
  return axios
    .post(apiEndPoint, queryObject, {
      headers: { "Content-Type": "application/json" },
    })
    .then(
      (response) => {
        // group data
        return response.data;
      },
      () => {
        alert("Error fetching data from API");
      }
    );
};
