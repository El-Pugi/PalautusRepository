export default function Filter({filter, filterChange}){
    return(
      <div>
        filter shown with<input
        value={filter}
        onChange={filterChange}
        />
      </div>
    )
}