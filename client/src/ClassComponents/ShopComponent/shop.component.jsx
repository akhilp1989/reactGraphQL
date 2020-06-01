import React,{useEffect} from 'react'
import {Route} from 'react-router-dom'
import CollectionPageContainer from '../../FunctionalComponents/Collection/collection.container'
//import{firestore,convertCollectionsSnapshotToMap} from '../../FireBase/firebase.utils'
import {connect} from 'react-redux'
//import {updateCollections} from '../../Redux/ShopData/shopData.actions'
//import WithSpinner from '../../FunctionalComponents/WithSpinner/withspinner.component'
import { fetchCollectionsStart } from '../../Redux/ShopData/shopData.actions';
import {default as CollectionOverview} from '../../FunctionalComponents/CollectionOverview/collection-overview.container';

//import collectionOverviewComponent from '../../FunctionalComponents/CollectionOverview/collection-overview.component';

const ShopComponent =({match})=> {
        
        return (
          <div className='shop-page'>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionOverview}
            />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}
            />
          </div>
        );
      }
    
export default ShopComponent


