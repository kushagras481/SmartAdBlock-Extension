import React from 'react'

import '../../Styles/Components/TitleBarStyles.scss'

import { URL } from '../../../Constants/URLEnums.js'

function TitleBar(props){
    const url = URL.BASE_URL

    return (
        <div id='title-bar'>
            <h1 id='title-text'>
                <a href={url} target="_blank" rel="noopener noreferrer">SmartAdBlock</a>
            </h1>
        </div>
    )
}

export default TitleBar