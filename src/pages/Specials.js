import React, {useEffect} from 'react';
import Background from '../components/Background';
import ComingSoon from '../components/ComingSoon';


function Specials() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Background />
            <ComingSoon />
        </>
    )
}

export default Specials