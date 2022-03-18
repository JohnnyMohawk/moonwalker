import React, {useEffect} from 'react';
import LogoCards from '../components/LogoCards';
import { pressData } from '../Data/press-data';
import Background from '../components/Background';


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