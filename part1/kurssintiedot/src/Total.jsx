// eslint-disable-next-line react/prop-types
export default function Total({ parts }) {

    // eslint-disable-next-line react/prop-types
    const total = parts.map(part => part.exercises).reduce((accumulator, currentValue) => accumulator + currentValue, 0); 


    return (
        <p>Total exercises: {total}</p>
    );
}
