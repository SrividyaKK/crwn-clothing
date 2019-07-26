import { UPDATE_COLLECTIONS } from "../constants";

export const updateCollections = collectionsMap => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap,
});