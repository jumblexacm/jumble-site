import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
  'BT20OVWWLQ',
  'fe84fe5263165f376960e3d44a532d30'
);

function CustomSearchBox() {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <SearchBox></SearchBox>
    </InstantSearch>
  );
}

export default CustomSearchBox;
