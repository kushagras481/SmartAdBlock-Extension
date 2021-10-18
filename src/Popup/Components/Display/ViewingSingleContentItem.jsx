import React from 'react'

import '../../Styles/Components/ViewingSingleContentItemStyles.scss'

function ViewingSingleContentItem(props){
    let itemValue = props.itemValue
    return (
        <div class='viewing-single-item-div red-border-hover'>
            <div class='viewing-single-item-section'>
                <div class='viewing-single-item'>
                    {itemValue}
                </div>
            </div>
        </div>
    )
}

export default ViewingSingleContentItem