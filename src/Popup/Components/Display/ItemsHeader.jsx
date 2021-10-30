import React from 'react'

import '../../Styles/Components/ItemsHeaderStyles.scss'

function ItemsHeader(props){
    let name = props.name
    let itemsHeaderButtons = props.itemsHeaderButtons

    return (
        <div class='items-header-div'>
            <div class='items-title-div'>
                <div class='items-title'>
                    {name}
                </div>
            </div>
            <div class='right-float vertical-align'>
                <div class='items-buttons-div'>
                    {itemsHeaderButtons}
                </div>
            </div>
        </div>
    )
}

export default ItemsHeader