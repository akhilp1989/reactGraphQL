import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import CollectionPage from '../../FunctionalComponents/Collection/collectionPage.component'
import{firestore,convertCollectionsSnapshotToMap} from '../../FireBase/firebase.utils'
import {connect} from 'react-redux'
import {updateCollections} from '../../Redux/ShopData/shopData.actions'

import CollectionOverview from '../../FunctionalComponents/CollectionOverview/collection-overview.component'

class shopComponent extends Component {
    unsubscribeFromSanpShot=null

    componentDidMount(){
        const {updateCollections}=this.props
        const collectionRef=firestore.collection('collections');
        this.unsubscribeFromSanpShot=collectionRef.onSnapshot(async snapshot=>{
            //console.log(snapshot.docs   )
            const collectionMap=convertCollectionsSnapshotToMap(snapshot)
            //console.log(collectionMap)
            updateCollections(collectionMap)
        })
      }
    render(){
        const {match}=this.props;
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} component ={CollectionOverview} /> 
            <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    updateCollections:collectionMap=>dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(shopComponent)


