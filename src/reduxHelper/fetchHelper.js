import queryString from 'query-string';

const hostMain = 'http://localhost:3000';

const mixinUrl = (inputUrl, inputObject) => {
  if (!inputObject) {
    return inputUrl;
  }
  const hasMark = !!location.search;
  const parameters = queryString.stringify(inputObject);
  return `${inputUrl}${hasMark ? '&' : '?'}${parameters}`;
};

export default (requestOption, requestData) => {
  const { url } = requestOption;
  let tempUrl = `${hostMain}${url}`;
  switch (requestOption.method) {
    case 'get':
      tempUrl = mixinUrl(tempUrl, requestData);
      break;
  }
  return fetch(tempUrl, requestOption);
};
