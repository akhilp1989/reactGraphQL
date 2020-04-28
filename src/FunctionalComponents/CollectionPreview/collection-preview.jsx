import React from 'react'
import CollectionItem from '../CollectionItem/collection-item.component'
import './preview-collection.styles.scss'

const collectionPreview =(props)=>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
            {props.items.slice(0,4).map(item=>(
                <CollectionItem key={item.id} item={item}/>
            ))}
            
            </div>
        </div>
        
    )
}

export default collectionPreview