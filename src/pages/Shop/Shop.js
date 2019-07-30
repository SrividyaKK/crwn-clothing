import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.Container';
import CollectionPageContainer from '../Collection/Collection.Container';
import './Shop.scss';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = ({ match, fetchCollectionsStartAsync, isCollectionsLoaded }) => {
    // const unsubscribeFromSnapshot = null;
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);