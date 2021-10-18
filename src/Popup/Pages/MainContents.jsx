import React, { useEffect } from 'react'

import '../Styles/Pages/MainStyles.scss'

import TitleBar from '../Components/Display/TitleBar'
import ContentsContainer from '../Components/Display/ContentsContainer'
import BottomBar from '../Components/Display/BottomBar'

function MainContents(props){
    return (
        <div id='main-page'>
            <div id='header'>
                <TitleBar />
            </div>
            <div id='main-page-components'>
                <ContentsContainer />
            </div>
            <div id='footer'>
                <BottomBar />
            </div>
        </div>
        
    )
}

export default MainContents