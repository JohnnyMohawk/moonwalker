import React, {useEffect} from 'react'
import Background from '../Background'
import LogoCards from '../LogoCards'


function Friends () {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Background />
            <LogoCards />
        </>
    )
}

export default Friends

