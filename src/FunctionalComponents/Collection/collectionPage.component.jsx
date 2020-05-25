import React from 'react'
import {  CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  }  from  './collection.styles'
import {connect} from 'react-redux'
import {selectCollection} from '../../Redux/ShopData/shopDataMap.selector'
import CollectionItem from '../CollectionItem/collection-item.component'


const CollectionPage = ({ collection }) => {
    //console.log(collection)
    const { title, items } = collection;
    return (
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  };
  
  const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });
  
  export default connect(mapStateToProps)(CollectionPage);