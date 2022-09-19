import React from 'react';
import { useInstantSearch } from 'react-instantsearch-hooks-web';

// https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-display/react-hooks/#handling-no-results
function NoResultsBoundary({ children, fallback }) {
  const { results } = useInstantSearch();

  // The `__isArtificial` flag prevents the NoResults component from showing until hits are returned.
  // Using !results.__isArtificial may cause 'TypeError: Cannot read properties of null'
  if (results && !results?.__isArtificial && results?.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function NoResults() {
  const { indexUiState } = useInstantSearch();

  return (
    <div className="flex grow justify-center items-center">
      <p className="text-center text-lg">
        Sorry! No results found for {`"${indexUiState.configure.query}"`}.
      </p>
    </div>
  );
}

export { NoResultsBoundary, NoResults };
