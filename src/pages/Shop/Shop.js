import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.Container';
import CollectionPageContainer from '../Collection/Collection.Container';
import './Shop.scss';
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.sagas';

const ShopPage = ({ match, fetchCollectionsStart, isCollectionsLoaded }) => {
    // const unsubscribeFromSnapshot = null;
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);