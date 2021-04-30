import axios from "axios";

const apiEndPoint = process.env.apiEndPoint;

export const requestResolveNames = async (queryNames) => {
  //
  const parseObject = {
    opts: {
      mode: "resolve",
    },
    data: queryNames,
  };
  //
  return await axios
    .post(apiEndPoint, parseObject, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return response.data;
      //setParsedNames(response.data);
    });
};
