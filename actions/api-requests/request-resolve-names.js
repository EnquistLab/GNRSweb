import axios from "axios";

const apiEndPoint = process.env.apiEndPoint;

export const requestResolveNames = async (queryNames) => {
  let arrayNames = queryNames
    .split("\n")
    // remove empty rows
    .filter((row) => row)
    // split fields and concatenate empty id
    .map((rows) => [""].concat(rows.split(",")));
  
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
      return response.data;
      //setParsedNames(response.data);
    });
};
