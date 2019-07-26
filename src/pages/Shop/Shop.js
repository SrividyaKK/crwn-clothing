import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';
import withSpinner from '../../components/withSpinner/withSpinner';
import './Shop.scss';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
    const [ loading, setLoading ] = useState(true);
    // const unsubscribeFromSnapshot = null;
    useEffect(() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            setLoading(false);
        })
        return () => {
            
        };
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     setLoading(false);
        // );
    }, [updateCollections]);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:categoryId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> } />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);