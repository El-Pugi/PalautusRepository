const Notification = ({ message, type }) => {
    if (!message) {
      return null
    }
  
    const className = type === 'error' ? 'notification error' : 'notification'
  
    return (
      <div className={className}>
        {message}
      </div>
    )
  }
  
  export default Notification
  