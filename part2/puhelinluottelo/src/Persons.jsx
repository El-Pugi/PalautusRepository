export default function Persons({ personToShow, deletePerson }) {
    return (
      <div>
        {personToShow.map(person => (
          <div key={person.id}>
            {person.name} {person.number}{' '}
            <button onClick={() => deletePerson(person.id)}>Delete</button>
          </div>
        ))}
      </div>
    )
  }
  