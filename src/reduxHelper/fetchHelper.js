import lodash from 'lodash';
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
    const tempOption = lodash.cloneDeep(requestOption);
    const { url } = tempOption;
    let tempUrl = `${hostMain}${url}`;
    switch (tempOption.method) {
        case 'get':
            tempUrl = mixinUrl(tempUrl, requestData);
            break;
        default:
            tempOption.body = JSON.stringify(requestData);
            break;
    }
    return fetch(tempUrl, tempOption);
};
