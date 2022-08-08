import React from 'react';
import { useInstantSearch } from 'react-instantsearch-hooks-web';

function NoResultsBoundary({ children, fallback }) {
  const { results } = useInstantSearch();

  // The `__isArtificial` flag prevents the NoResults component from showing until hits are returned
  if (!results.__isArtificial && results.nbHits === 0) {
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
