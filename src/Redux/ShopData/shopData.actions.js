import shopDataConstants from './shopDataConstants'

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopDataConstants.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  });
  
  export const fetchCollectionsFailure = errorMessage => ({
    type: shopDataConstants.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  });
  
  export const fetchCollectionsStart = collectionsMap => ({
    type: shopDataConstants.FETCH_COLLECTIONS_START,
    payload: collectionsMap
  });
  