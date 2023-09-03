
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
  
        if (data?.items && data.items.length > 0) {
          setChannelDetail(data.items[0]);
        } else {

          alert('Search the Channel Name in SearchBar');
          // Handle the case when no items are found
          // You can set a default value or display an error message
          // setChannelDetail(defaultValue);
        }
  
        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
  
        if (videosData?.items) {
          setVideos(videosData.items);
        } else {
            console.log("search");
          // Handle the case when no videos are found
          // You can set an empty array or display an error message
          // setVideos([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error, display an error message, or take appropriate action.
      }
    };
  
    fetchResults();
  }, [id]);
  

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(18,45,174,0.9697128851540616) 50%, rgba(255,0,0,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

