import axios from "axios";

const apiEndPoint = process.env.apiEndPoint;

export const requestResolveNames = async (queryNames, threshold) => {
  //
  const parseObject = {
    opts: {
      mode: "resolve",
    },
    data: queryNames,
  };

  // only include threshold if different than default
  if (threshold !== 0.5) {
    parseObject.opts.tfuzzy = threshold
  }

  //
  return await axios
    .post(apiEndPoint, parseObject, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return response.data;
      //setParsedNames(response.data);
    }).catch(function (error) {
      return error.message
    });
};
