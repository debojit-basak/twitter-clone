import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1334869466505605120"} />
                <TwitterTimelineEmbed
  sourceType="profile"
  screenName="DEBOJITBASAK15"
  options={{height: 400}}
/>
<TwitterShareButton
url={"DEBOJITBASAK15"}
options={{text:"react is awesome", via:"Debojit"}}
/>
            </div>
        </div>
    )
}

export default Widgets
