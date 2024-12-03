/* eslint-disable react/prop-types */
import Header from "./Header"
import Content from "./Content"

// eslint-disable-next-line react/prop-types
export default function Course({course}){
    return(
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
        </div>
    )
}