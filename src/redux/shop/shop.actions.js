import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from '../constants';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// export const updateCollections = collectionsMap => ({
//     type: UPDATE_COLLECTIONS,
//     payload: collectionsMap,
// });

const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START,
});
const fetchCollectionsSuccess = collectionsMap => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});
const fetchCollectionsFailure = errorMessage => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => async dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        // updateCollections(collectionsMap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
};