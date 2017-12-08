import xhr from 'xhr';
export const SEARCH_WIKI = 'SEARCH_WIKI';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const CLEAR_RESULTS = 'RECIEVE_RESULTS';
export const SELECTED_RESULT = 'SELECTED_RESULT';
export const CLEAR_SELECTED_RESULT = 'CLEAR_SELECTED_RESULT';

export function search(query = "apple") {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      if (!query) {
        return dispatch(clearResults());
      }
      const options = {
        url: `https://en.wikipedia.org/w/api.php?format=json&callback=?&action=opensearch&origin=*&search=${query}`,
      };
      // const URL = `https://en.wikipedia.org/w/api.php?format=json&callback=?&action=opensearch&search=${query}`;
      xhr(options, (error, response, body)=>{
        if (error) {
          return reject();
        }
        body = body.slice(5, body.length - 1);
        const parsedBody = JSON.parse(body);
        dispatch(receiveResults(parsedBody));
      });
    });
  };
}

export function receiveResults(rawResults) {
  const [searchTerm, titles, descriptions, URLs] = rawResults;
  const parsedResults = titles.map((title, index) => {
    const resultObj = {
      title: title,
      description: descriptions[index],
      url: URLs[index]
    }
    return resultObj;
  });
  return {
    type: RECEIVE_RESULTS,
    results: parsedResults
  };
}

export function clearResults() {
  return {
    type: CLEAR_RESULTS
  }
}

export function setSelectedResult(resultIndex) {
  return {
    type: SELECTED_RESULT,
    resultIndex: resultIndex
  }
}

export function clearSelectedResult() {
  return {
    type: CLEAR_SELECTED_RESULT
  }
}
