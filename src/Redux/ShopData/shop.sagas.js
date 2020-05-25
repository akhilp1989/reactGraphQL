import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../FireBase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shopData.actions';

import shopDataConstants from './shopDataConstants';

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //yield console.log('collectionsMap ,',collectionsMap)
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(shopDataConstants.FETCH_COLLECTIONS_START, fetchCollections);
}