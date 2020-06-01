import React from 'react'
import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import CollectionPage from './collectionPage.component'
import Spinner from '../WithSpinner/withspinner.component'

const GET_COLLECTIONS_BY_TITLE =gql`
    query getCollectionsByTitle ($title : String!){
        getCollectionsByTitle(title:$title){
            id
            title
            items{
                id
                name
                price
                imageUrl
            }
        }
    }
`
const CollectionPageContainer =({match})=>{
    //console.log(match.params.collectionId)
    return(
        <Query query={GET_COLLECTIONS_BY_TITLE} 
        variables={{title:match.params.collectionId}} >
        {
            ({loading,data})=>{
                if(loading) return <Spinner/>
                //console.log({data})
                const { getCollectionsByTitle } = data;
                return <CollectionPage collection={getCollectionsByTitle}/>
            }
        }
        
        </Query>
    )
}

export default CollectionPageContainer