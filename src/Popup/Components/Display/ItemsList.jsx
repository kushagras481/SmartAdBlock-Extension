import React from 'react'

import '../../Styles/Components/ItemsListStyles.scss'

function ItemsList(props){
    return (
        <div class='items-list-div'>
            {props.children}
        </div>
    )
}

export default ItemsList