import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Post from '../Timeline/Post';
import CustomPagination from './CustomPagination';
import styles from './SearchLanding.module.css';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  Pagination,
} from 'react-instantsearch-hooks-web';

let ALGOLIA_ID = 'BT20OVWWLQ';
let ALGOLIA_SEARCH_KEY = 'fe84fe5263165f376960e3d44a532d30';

const searchClient = algoliasearch(ALGOLIA_ID, ALGOLIA_SEARCH_KEY);

const INDEX_NAME = 'posts';

const Hit = ({ hit }) => {
  console.log(JSON.stringify(hit, null, 4));
  return (
    <div className={styles.postContainer}>
      <Post post={hit} />
    </div>
  );
};

function SearchLanding() {
  const router = useRouter();
  const query = router.query.query;

  // React StrictMode will render components twice in development, but not production
  //   useEffect(() => {
  //     console.log(query);
  //   });

  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
        <Configure query={query} hitsPerPage={5} />
        <div className={styles.hitsContainer}>
          <Hits hitComponent={Hit} />
        </div>
        <CustomPagination padding={2} />
      </InstantSearch>
    </div>
  );
}

export default SearchLanding;
