import React, {useEffect} from 'react'
import Background from '../components/Background'
import LogoCards from '../components/LogoCards'
import { friendsData } from '../Data/friends-data'


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

