const Bio = ({ name, login, date_joined, bioExtraInfo,url }) => {

    const date = new Date(date_joined);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return <div className="Bio">
        <div className="name">
            <h3>{name}</h3>
            <span className="date">Joined {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</span>
        </div>
        {/* <span>@{login}</span> */}
        <a href={url}>@{login}</a>
        <span>{bioExtraInfo}</span>
    </div>
}

export default Bio;