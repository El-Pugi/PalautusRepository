/* eslint-disable react/prop-types */
import Part from './Part';
import Total from './Total'


// eslint-disable-next-line react/prop-types
export default function Content({parts}){
    return(
        <div>
        {parts.map(part => (<Part key={part.id} name={part.name} exercises={part.exercises} />))}
        <Total parts={parts}/>
      </div>
    )
}