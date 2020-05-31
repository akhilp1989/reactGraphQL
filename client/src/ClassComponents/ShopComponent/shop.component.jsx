import React,{useEffect} from 'react'
import {Route} from 'react-router-dom'
import CollectionPage from '../../FunctionalComponents/Collection/collectionPage.component'
//import{firestore,convertCollectionsSnapshotToMap} from '../../FireBase/firebase.utils'
import {connect} from 'react-redux'
//import {updateCollections} from '../../Redux/ShopData/shopData.actions'
//import WithSpinner from '../../FunctionalComponents/WithSpinner/withspinner.component'
import { fetchCollectionsStart } from '../../Redux/ShopData/shopData.actions';
import CollectionOverviewComponent from '../../FunctionalComponents/CollectionOverview/collection-overview.component';

//import collectionOverviewComponent from '../../FunctionalComponents/CollectionOverview/collection-overview.component';

const ShopComponent =({match})=> {
        
        return (
          <div className='shop-page'>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionOverviewComponent}
            />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPage}
            />
          </div>
        );
      }
    
export default ShopComponent


