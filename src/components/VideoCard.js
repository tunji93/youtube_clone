import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const VideoCard = ({image,title,channel, channelImage, views, timestamp}) => {
    return (
        <div className="videocard">
            <img  src={image} alt="image" className="videocard_img"/>
            <div className="videocard_info">
                <Avatar
                  className="videocard_avatar"
                  src={channelImage}
                  alt={channel}
                />
                <div className="videocard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} * {timestamp}</p>

                </div>


            </div>
            
        </div>
    )
}

export default VideoCard
