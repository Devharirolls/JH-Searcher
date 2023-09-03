import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "300px", }, boxShadow: "none", borderRadius: 5 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px',md:"300px"}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 100%, rgba(23,105,223,0.9697128851540616) 0%, rgba(0,212,255,1) 100%)", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#fff">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="white">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "#fff", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;


// background: rgb(2,0,36);
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,105,223,0.9697128851540616) 15%, rgba(0,212,255,1) 100%);




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Typography,Card,CardContent,CardMedia } from '@mui/material';
// import { CheckCircle } from '@mui/icons-material';

// import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

// const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
//   <Card sx={{ width: { xs: '100%', sm: '358px', md: "300px", }, boxShadow: "none", borderRadius: 0 }}>
//     <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
//       <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
//         sx={{ width: { xs: '100%', sm: '358px',md:"300px"}, height: 180 }} 
//       />
//     </Link>
//     <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
//       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
//         <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
//           {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
//         </Typography>
//       </Link>
//       <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
//         <Typography variant="subtitle2" color="gray">
//           {snippet?.channelTitle || demoChannelTitle}
//           <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
//         </Typography>
//       </Link>
//     </CardContent>
//   </Card>
// );

// export default VideoCard;