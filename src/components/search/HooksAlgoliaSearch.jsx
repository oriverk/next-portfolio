import React, { useState, useEffect } from 'react';
import Router, { withRouter } from 'next/router';
import qs from 'qs';
import algoliasearch from 'algoliasearch/lite'
import { Configure, InstantSearch, } from 'react-instantsearch-dom'
import { findResultsState } from 'react-instantsearch-dom/server'
import { SearchResults } from './SearchResults'
import { CustomSearchBox } from './Connector'
import blogConfig from '../../../blog.config'

const indexName = blogConfig.algolia.indexName
const searchClient = algoliasearch(
  blogConfig.algolia.appId,
  blogConfig.algolia.searchOnlyApiKey
)

const updateAfter = 700

const createURL = state => `?${qs.stringify(state)}`

const searchStateToUrl = searchState =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : ''

const HooksAlgoliaSearch = ({ initialSearchState, resultsState }) => {
  const [searchState, setSearchState] = useState(initialSearchState)

  useEffect(() => {
    setSearchState(qs.parse(window.location.search.slice(1)))
  }, [])

  const onSearchStateChange = searchState => {
    clearTimeout(debouncedSetState)

    const debouncedSetState = setTimeout(() => {
      const href = searchStateToUrl(searchState)

      Router.push(href, href, {
        shallow: true,
      })
    }, updateAfter)

    setSearchState(searchState)
  }
  
  return (
    <InstantSearch
    indexName={indexName}
    searchClient={searchClient}
    resultsState={resultsState}
    onSearchStateChange={onSearchStateChange}
    searchState={searchState}
    createURL={createURL}
    >
      <Configure hitsPerPage={5} />
      <SearchResults />
      <CustomSearchBox />
    </InstantSearch>
  )
}

HooksAlgoliaSearch.getInitialProps = async ({ query }) => {
  const searchState = query ? qs.parse(query) : {}
  const resultsState = await findResultsState(App, { searchState })

  return { resultsState, initialSearchState: searchState }
}

export default withRouter(HooksAlgoliaSearch)
