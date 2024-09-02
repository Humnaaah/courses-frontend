import React from 'react'

const Tags = ({tag}) =>{
    console.log("The course tag is", tag)
    return(
        <div className='boxed-container'>
           {tag.map((item,i) =>(
            <div className="tag-contents" key={i}>
            <p className='tag'>{item}</p>
            </div>
           ))}
        </div>
    )
}


export default Tags