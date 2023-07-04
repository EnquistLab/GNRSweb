import axios from "axios";

const apiEndPoint = process.env.apiEndPoint;

export const requestResolveNames = async (queryNames, threshold, displayError) => {
  //
  const parseObject = {
    opts: {
      mode: "resolve",
    },
    data: queryNames,
  };

  if (threshold > 0) {
    parseObject.opts.tfuzzy = threshold
    console.log(parseObject)
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
      displayError(error.message)
    });
};
