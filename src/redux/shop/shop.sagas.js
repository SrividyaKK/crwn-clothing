import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../constants';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
    
    // collectionRef.get().then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     // updateCollections(collectionsMap);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}