import { useRouter } from 'next/router';
import Post from '../Timeline/Post';
import CustomPagination from './CustomPagination';
import styles from './SearchLanding.module.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure, Hits } from 'react-instantsearch-hooks-web';
import { NoResultsBoundary, NoResults } from './NoResults';

const INDEX_NAME = 'posts';

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

const searchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliaClient.search(requests);
  },
};

const Hit = ({ hit }) => {
  return (
    <div className={styles.postContainer}>
      <Post post={hit} />
    </div>
  );
};

function SearchLanding() {
  const router = useRouter();
  const query = router.query.query;

  return (
    <div className={styles.landingWrapper}>
      <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
        <Configure query={query} hitsPerPage={5} />
        <div className={styles.hitsContainer}>
          <NoResultsBoundary fallback={<NoResults />}>
            <Hits hitComponent={Hit} />
            <CustomPagination padding={2} />
          </NoResultsBoundary>
        </div>
      </InstantSearch>
    </div>
  );
}

export default SearchLanding;
