import React from 'react'

const CourseInfo = ({detail}) =>{
    return(
        <div className='boxed-container'>
           {detail.map((item,i) =>(
            <div className="contents-course" key={i}>
            <p className='info'> <span><img src={item.icon}/> </span>{item.title}</p>
            <p className='details'>{item.detail}</p>
            </div>
           ))}
        </div>
    )
}


export default CourseInfo