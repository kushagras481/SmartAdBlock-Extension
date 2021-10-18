import React from 'react'

import '../../Styles/Components/ItemsHeaderStyles.scss'

function ItemsHeader(props){
    let name = props.name

    function edit(){
        console.log('edit')
    }

    return (
        <div class='items-header-div'>
            <div class='items-title-div'>
                <div class='items-title'>
                    {name}
                </div>
            </div>
            <div class='right-float vertical-align'>
                <div class='items-buttons-div'>
                    <button class='add-button' onClick={edit}>Add</button>
                    <button class='save-button' onClick={edit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ItemsHeader