import { useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure, Hits } from 'react-instantsearch-hooks-web';
import { useRouter } from 'next/router';

const searchClient = algoliasearch(
  'BT20OVWWLQ',
  'fe84fe5263165f376960e3d44a532d30'
);

const INDEX_NAME = 'posts';

const Hit = ({ hit }) => {
  return <div>{JSON.stringify(hit)}</div>;
};

function SearchLanding() {
  const router = useRouter();
  const query = router.query.query;

  // React StrictMode will render components twice in development, but not production
  //   useEffect(() => {
  //     console.log(query);
  //   });

  return (
    <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
      <Configure query={query} />
      <Hits hitComponent={Hit}></Hits>
    </InstantSearch>
  );
}

export default SearchLanding;
