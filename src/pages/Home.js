import React, { useEffect, useState } from 'react'
import './Home.css'
import {PlayArrow} from '@mui/icons-material'
import axios from 'axios';
import datas from '../data/data.json';
import { Link } from "react-router-dom";
import { Avatar, Box, Button, Container, Divider,  List, ListItem, ListItemAvatar, ListItemButton, Stack, Typography } from '@mui/material';


const Home = () => {

    const[mydata,setMydata]=useState([])
    const [onedata, setOnedata] = useState({
      name: "Spider-Man: No Way Home",
      director: "Jon Watts",
      summary:
        "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      poster:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/487e16133455823.61bde605d7090.png",
      trailer: "https://www.youtube.com/watch?v=rt-2cxAiPJk",
      release_year: 2021,
      cast: [
        "Tom Holland",
        "Zendaya",
        "Jacob Batalon",
        "Marisa Tomei",
        "Jamie Foxx",
      ],
    });

    const separator = " | ";




 useEffect(() => {

      
        setMydata(datas)

   
 }, []);




  return (
    <div className="homeImg">
      <Container maxWidth="xl">
        <Box sx={{ display: "flex" }}>
          <Stack
            direction="column"
            spacing={10}
            sx={{
              flex: 1,
              height: "85vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white">
              <Typography variant="h8">{onedata.cast.join(" | ")}</Typography>
              <Typography variant="h1">{onedata.name}</Typography>
              <Typography variant="h8">
                {onedata.release_year} | DIRECTOR : {onedata.director} | SEASON
                : 1
              </Typography>
              <br></br>
              <Typography variant="h8">{onedata.summary}</Typography>
            </Typography>
            <Stack direction="row">
              <Button
                href={onedata.trailer}
                variant="contained"
                color="error"
                startIcon={<PlayArrow />}
                sx={{ mx: 2 }}
              >
                Start Watching
              </Button>
              <Button
                href={onedata.trailer}
                variant="outlined"
                sx={{
                  color: "white",
                  outlineColor: "white",
                  borderColor: "white",
                  mx: 2,
                }}
              >
                Play Trailer
              </Button>
            </Stack>
          </Stack>

          <Avatar
            src={onedata.poster}
            sx={{ height: "100%", flex: 1, height: "85vh" }}
            variant="rounded"
          ></Avatar>
        </Box>
        <Box my={1}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Recommended Movies
          </Typography>
          <Divider sx={{ bgcolor: "white" }} />
          <ul className="movielist">
            {mydata.map((movie) => (
              <li onClick={() => setOnedata(movie)}>
                <Avatar
                  variant="rounded"
                  sx={{ height: "10rem", width: "10rem" }}
                  src={movie.poster}
                />
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </div>
  );
}

export default Home
