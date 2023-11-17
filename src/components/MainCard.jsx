import { useContext } from "react";

import Avatar from "./Avatar"
import Bio from "./Bio";
import SocialInfo from "./SocialInfo";
import Stats from "./Stats";
import { Mode } from "../context";

const MainCard = ({data}) => {
    const theme = useContext(Mode);

   return <div className="MainCard"  style={{ backgroundColor: theme === 'dark' ? '#1f2a48' : "#333" }}>
        <Avatar src={data.avatar_url} altProp={data.login} />
        <Bio login={data.login} name={data.name} bioExtraInfo={data.bio} date_joined={data.created_at} url={data.html_url} />
        <Stats no_repos={data.public_repos} no_followers={data.followers} no_following={data.following} />
        <SocialInfo company={data.company} location={data.location} twitter_username={data.twitter_username} blog={data.blog} />
    </div>
}

export default MainCard;