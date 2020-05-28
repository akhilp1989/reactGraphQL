import React,{useEffect} from 'react'
import {Route} from 'react-router-dom'
//import CollectionPage from '../../FunctionalComponents/Collection/collectionPage.component'
//import{firestore,convertCollectionsSnapshotToMap} from '../../FireBase/firebase.utils'
import {connect} from 'react-redux'
//import {updateCollections} from '../../Redux/ShopData/shopData.actions'
//import WithSpinner from '../../FunctionalComponents/WithSpinner/withspinner.component'
import { fetchCollectionsStart } from '../../Redux/ShopData/shopData.actions';
import CollectionsOverviewContainer from '../../FunctionalComponents/CollectionOverview/collection-overview.container'
import CollectionPageContainer from '../../FunctionalComponents/Collection/collection.container';
//import collectionOverviewComponent from '../../FunctionalComponents/CollectionOverview/collection-overview.component';

const ShopComponent =({fetchCollectionsStart,match})=> {
         useEffect(()=>{
      fetchCollectionsStart()
     },[fetchCollectionsStart])
        return (
          <div className='shop-page'>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverviewContainer}
            />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}
            />
          </div>
        );
      }
    
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  });
  

export default connect(null,mapDispatchToProps)(ShopComponent)


