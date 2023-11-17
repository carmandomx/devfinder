import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


const SocialInfo = ({ location, twitter_username, company, blog }) => {

    return <div className="SocialInfo">
        <div className={ location ? '' : 'na' }>
            <FaLocationDot />{ location ? location : 'Not Available' }
        </div>
        <div className={ twitter_username ? '' : 'na' }>
            <FaTwitter /> { twitter_username ? twitter_username : 'Not Available' }
        </div>
        <div className={ company ? '' : 'na' }>
           <FaBuilding /> { company ? company : 'Not Available' }
        </div>
        <div className={ blog ? '' : 'na' }>
          <FaLink />  { blog ? blog : 'Not Available' }
        </div>
    </div>
}


export default SocialInfo;