
import { useContext } from "react";
import { Mode } from "../context";


const Stats = ({ no_repos, no_followers, no_following }) => {
    const theme = useContext(Mode);


    return <div className="Stats" style={{ backgroundColor: theme === 'dark' ? '#141c2f' : "#ccc", color: theme === 'dark' ? '#fff' : '#000' }}>
        <p> Repos <span>{no_repos}</span> </p>
        <p> Followers <span>{no_followers}</span> </p>
        <p> Following <span>{no_following}</span> </p>
    </div>
}

export default Stats;