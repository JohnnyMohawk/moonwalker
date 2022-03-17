import React from 'react'
import '../components/Quote.css'


export default function Quote(props) {
    let sentence = props.quote.split(' ').join('\xa0');
    let wordArr = sentence.match(/\b(\w+\W+)/g)
    console.log(wordArr)
    return (
        <div id="quoteWrap">
            <h1 id="quoteText">
            {wordArr.map((word) => {
                    return (
                <span className='word'>{word}</span>
                )
            })}
            </h1>
        </div>
    )
}




// export default function Quote() {
//     return (
//         <div id="quoteWrap">
//             <h1 id="quoteText">
//                 <span className='word'>Moonwalker</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>Cafe</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>is</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>the</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>scratch</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>kitchen</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>every</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>neighborhood</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>deserves.</span>
//                 <span className='word'>&nbsp;</span>
//                 <span className='word'>- Chicago Reader</span>
//             </h1>
//         </div>
//     )
// }
