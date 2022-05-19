console.log('Module 10.2');

import { fetchNews } from './newsApi.js';

const refs = {
  form: document.querySelector('form'),
  list: document.querySelector('#news-list'),
  buttons: document.querySelector('#page-buttons'),
  loadMore: document.querySelector('#load-more'),
};

const HITS_PER_PAGE = 5;
let totalPages = 1;
let currentPage = 1;
let query = '';

const handleSubmit = (event) => {
  const { value } = event.target.query;

  event.preventDefault();

  if (!value) return;

  currentPage = 1;
  query = value;
  fetchAndRender().then(() => {
    // totalPages = nbPages;
    totalPages = 10;
    refs.form.reset();
  });
};

// const handlePageClick = (event) => {
//   if (event.target === event.currentTarget || !query) return;

//   const { page } = event.target.dataset;

//   currentPage = page;
//   fetchAndRender();
// };

const fetchAndRender = () =>
  fetchNews({ query, page: currentPage, hitsPerPage: HITS_PER_PAGE }).then(
    ({ hits, nbPages }) => {
      renderList(hits);
      // renderButtons(nbPages);
    },
  );

const renderList = (hits) => {
  // render news list here
  const list = hits.map(
    ({ title, url }) => `<li><a href="${url}">${title}</a></li>`,
  );

  // refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', list.join(' '));
};

// const renderButtons = (count) => {
//   // render page buttons
//   const buttons = [];

//   for (let i = 1; i <= count; i++) {
//     if (i.toString() === currentPage.toString()) {
//       buttons.push(`<button data-page="${i}" class="active">${i}</button>`);
//     } else {
//       buttons.push(`<button data-page="${i}">${i}</button>`);
//     }
//   }

//   refs.buttons.innerHTML = '';
//   refs.buttons.insertAdjacentHTML('beforeend', buttons.join(' '));
// };

const handleLoadMore = () => {
  currentPage += 1;

  if (currentPage > totalPages) return;

  fetchAndRender();
};

refs.form.addEventListener('submit', handleSubmit);
// refs.buttons.addEventListener('click', handlePageClick);
refs.loadMore.addEventListener('click', handleLoadMore);
