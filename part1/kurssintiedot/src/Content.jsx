import Part1 from "./Part1"
import Part2 from "./Part2"
import Part3 from "./Part3"

// eslint-disable-next-line react/prop-types
export default function Content({parts}){
    return(
        <div>
          <Part1 part1={parts[0].name} exercises1={parts[0].exercises}/>
          <Part2 part2={parts[1].name} exercises2={parts[1].exercises}/>
          <Part3 part3={parts[2].name} exercises3={parts[2].exercises}/>
        </div>
    )
}