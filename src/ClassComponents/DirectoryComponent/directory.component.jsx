import React  from 'react'
import './directory.styles.scss'
import {connect} from 'react-redux'
import MenuItem from '../../FunctionalComponents/MenuItem/menu-item.component'

const Directory =({sections})=>{
    return(
        <div className='directory-menu'>
            {sections.map(s=>(
                <MenuItem key={s.id} title={s.title.toUpperCase()} imageUrl={s.imageUrl}/>
            ))}


            </div>

        )
}
   
    const mapStateToProps=state=>({
        sections:state.directoryReducer.sections
    })    
    

export default connect(mapStateToProps)(Directory)