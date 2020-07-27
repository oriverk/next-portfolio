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
const createURL = (state) => `?${qs.stringify(state)}`

const searchStateToUrl = (searchState) =>
  searchState ? `${window.location.pathsname}?${qs.stringify(searchState)}` : ''

export function Hooks() {
  const [searchState, setSearchState] = useState()
  const [resultsState, setResultsState] = useState('')

  useEffect(() => {
    setSearchState(qs.parse(window.location.search.slice(1)))
    setResultsState(findResultsState(InstantSearch, { indexName, searchClient }))
  }, [])
  
  const onSearchStateChange = (searchState) => {
    clearTimeout(debouncedSetState)
    const debouncedSetState = setTimeout(() => {
      const href = searchStateToUrl(searchState)
      Router.push(href, href, {
        shallow: true,
      })
    }, updateAfter)
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
