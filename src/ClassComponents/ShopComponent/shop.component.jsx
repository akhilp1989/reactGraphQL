import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import CollectionPage from '../../FunctionalComponents/Collection/collectionPage.component'
import{firestore,convertCollectionsSnapshotToMap} from '../../FireBase/firebase.utils'
import {connect} from 'react-redux'
import {updateCollections} from '../../Redux/ShopData/shopData.actions'
import WithSpinner from '../../FunctionalComponents/WithSpinner/withspinner.component'

import CollectionOverview from '../../FunctionalComponents/CollectionOverview/collection-overview.component'

const CollectionOverviewWithSpinner=WithSpinner(CollectionOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);

class shopComponent extends Component {
    state={
        loading:true
    }

    unsubscribeFromSanpShot=null

    componentDidMount(){
        const {updateCollections}=this.props
        const collectionRef=firestore.collection('collections');
        this.unsubscribeFromSanpShot=collectionRef.onSnapshot(async snapshot=>{
            //console.log(snapshot.docs   )
            const collectionMap=convertCollectionsSnapshotToMap(snapshot)
            //console.log(collectionMap)
            updateCollections(collectionMap)
            this.setState({loading:false});
        })
      }
    render(){
        const {match}=this.props;
        const {loading}=this.state
        //console.log('Inside render from Shop->',loading)
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} 
            render={(props)=><CollectionOverviewWithSpinner isLoading={loading}{...props} />} /> 
            <Route path={`${match.path}/:categoryId`} 
            render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    updateCollections:collectionMap=>dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(shopComponent)


