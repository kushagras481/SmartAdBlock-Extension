import React from 'react'

import '../../Styles/Components/ItemsBoxStyles.scss'

import ItemsHeader from './ItemsHeader'
import ItemsList from './ItemsList'

function ItemsBox(props){
    let header = props.header
    let emptyPhrase = props.emptyPhrase

    let itemsListView

    if(props.children == null || typeof props.children == 'undefined'){
        itemsListView = (
            <div id='empty-container-section'>
                <h2 id='empty-app-phrase'>{emptyPhrase}</h2>
            </div>
        )
    }
    else{
        itemsListView = (
            <>
                {props.children}
            </>
        )
    }

    return (
        <div class='items-box-section'>
            <div class='items-header-section'>
                <ItemsHeader name={header}/>
            </div>
            <div class='items-list-section'>
                <ItemsList>
                    {itemsListView}
                </ItemsList>
            </div>
        </div>
    )
}

export default ItemsBox