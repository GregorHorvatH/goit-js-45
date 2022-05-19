const URL = 'https://hn.algolia.com/api/v1/search';

export const fetchNews = ({ query, page, hitsPerPage }) =>
  axios
    .get(`${URL}?query=${query}&page=${page}&hitsPerPage=${hitsPerPage}`)
    .then(({ data }) => data);
