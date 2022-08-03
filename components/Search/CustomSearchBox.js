import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
  'BT20OVWWLQ',
  'fe84fe5263165f376960e3d44a532d30'
);

const INDEX_NAME = 'posts';

function CustomSearchBox() {
  return (
    <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
      <SearchBox placeholder="Search"></SearchBox>
    </InstantSearch>
  );
}

export default CustomSearchBox;
