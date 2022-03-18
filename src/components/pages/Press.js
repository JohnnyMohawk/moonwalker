import React, {useEffect} from 'react';
import LogoCards from '../LogoCards';
import { pressData } from '../../Data/press-data';
import Background from '../Background';


const Press = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <Background />
            <LogoCards header="Moonwalker in the Media!" logoLinkData={pressData} />
        </>
    )
}

export default Press