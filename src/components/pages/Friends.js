import React, {useEffect} from 'react'
import Background from '../Background'
import LogoCards from '../LogoCards'
import { friendsData } from '../../Data/friends-data'


function Friends () {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Background />
            <LogoCards header="Proudly Serving" logoLinkData={friendsData} />
        </>
    )
}

export default Friends

