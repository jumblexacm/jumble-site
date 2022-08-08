import { useRouter } from 'next/router';
import Post from '../Timeline/Post';
import CustomPagination from './CustomPagination';
import styles from './SearchLanding.module.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure, Hits } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

const INDEX_NAME = 'posts';

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
    <div className='grow bg-gray-200'>
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
