import React from 'react'

import '../../Styles/Components/ViewingDoubleContentItemStyles.scss'

function ViewingDoubleContentItem(props){
    let adblockerName = props.adblockerName
    let extensionId = props.extensionId

    return (
        <div class='viewing-double-item-div red-border-hover'>
            <div class='viewing-double-item-section'>
                <div class='viewing-double-item'>
                    {adblockerName}
                </div>
            </div>
            <div class='viewing-double-item-section'>
                <div class='viewing-double-item left-border'>
                    {extensionId}
                </div>
            </div>
        </div>
    )
}

export default ViewingDoubleContentItem