import axios from "axios";

const apiEndPoint = process.env.apiEndPoint;

export const requestResolveNames = async (queryNames) => {
  let arrayNames = queryNames.split('\n')
    .filter((row) => row)
    .map((rows) => rows.split(',') )
  // 
  const parseObject = {
    opts: {
      mode: "resolve",
    },
    data: arrayNames,
  };
  // 
  return await axios
    .post(apiEndPoint, parseObject, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return response.data
      //setParsedNames(response.data);
    });
};
