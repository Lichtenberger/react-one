function Tweet({ date, message, name, username }) {
    return (
        <div className='tweet'>
            <span>{name}</span>
            <span>{username}</span>
            <span>{date}</span>
            <p>{message}</p>
        </div>
    )
}