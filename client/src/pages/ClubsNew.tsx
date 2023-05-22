import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Card, CardContent, Typography,
} from '@material-ui/core';
import Box from '@mui/material/Box';
import Grid1 from '@mui/material/Unstable_Grid2';
import axios from 'axios';
import styled from 'styled-components';
import Feed from './Feed';
import HomeUserDisplay from '../components/UserDisplay/HomeUserdisplay.';
import CreateClubs from '../components/CreateClubs/CreateClubs';
import { ClubHeader } from './style';

export interface Club {
  id: string;
  name: string;
  description: string;
  image: string;
  clubMembers: string[];
}

function ClubsNew() {
  const [clubs, setClubs] = useState<Club[]>([]);

  const colWidth = {
    xs: 12, sm: 6, md: 4, lg: 3,
  } as const;

  useEffect(() => {
    async function fetchClubs() {
      const response = await axios.get('/api/clubs');
      setClubs(response.data);
    }
    fetchClubs();
  }, []);

  const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

  const StyledCard = styled(Card) <{ flexBasis?: string }>`
  flex-basis: ${(props) => props.flexBasis || '33%'};
  margin: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

  // const HeaderBox = styled.div`
  //   background-color: #e0d0c2;
  //   padding: 7px 0;
  //   margin: 10px auto;
  //   border-radius: 20px;
  //   text-align: center;
  //   max-width: 240px;
  // `;
  return (
    <Box sx={{
      flexGrow: 1, marginTop: '10px', overflow: 'auto', height: '100vh',
    }}
    >
      <Grid1
        container
        spacing={0}
        sx={(theme) => ({
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            ...(Object.keys(colWidth) as Array<keyof typeof colWidth>).reduce(
              (result, key) => ({
                ...result,
                [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                  [theme.breakpoints.only(key)]: {
                    borderRight: 'none',
                  },
                },
              }),
              {},
            ),
          },
        })}
      >
        <Grid1
          xs={2.5}
          sx={{
            position: 'sticky', top: '0px', height: '98vh', paddingBottom: '8vh',
          }}
        >
          <Box sx={{
            width: '100%',
            height: '20vh',
            overflow: 'clip',
            backgroundImage: 'url(https://i.imgur.com/ZmgMDQ2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          >
            <HomeUserDisplay />
          </Box>
          <Box sx={{ width: '100%', maxHeight: '70vh', overflow: 'auto' }}>
            <Feed />
          </Box>
        </Grid1>
        <Grid1 xs={9.5} sx={{ height: '99vh', overflow: 'auto', paddingBottom: '9vh' }}>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              backgroundImage: 'url(https://i.imgur.com/oB9cYCo.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                {/* <HeaderBox> */}
                <ClubHeader>Create a Club</ClubHeader>
                {/* </HeaderBox> */}
                <CreateClubs setClubs={setClubs} />
              </Grid>

              <Grid item xs={12} md={8}>
                {/* <HeaderBox> */}
                <ClubHeader>Book Clubs</ClubHeader>
                {/* </HeaderBox> */}
                <CardContainer>
                  {clubs && clubs.length > 0 && clubs.map((club) => (
                    <StyledCard key={club.id} flexBasis="25%">
                      <Link
                        to={`/clubs/${club.id}?name=${encodeURIComponent(club.name)}`}
                        style={{
                          color: 'black', textDecoration: 'none', fontSize: '24px', fontWeight: 600, display: 'block', width: '100%',
                        }}
                      >
                        <iframe
                          title={`Club image for ${club.name}`}
                          src={club.image}
                          style={{
                            pointerEvents: 'none', display: 'block', margin: '0 auto', border: 'none', paddingTop: '8px', width: '100%',
                          }}
                        />
                        <CardContent style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative',
                        }}
                        >
                          <Typography variant="h5" component="h2" style={{ textAlign: 'center', marginBottom: '10px' }}>
                            {club.name}
                          </Typography>
                          <Typography variant="body1" component="p" style={{ fontSize: '18px', color: 'gray' }}>
                            {club.description}
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            style={{
                              fontSize: '13px', color: 'gray', position: 'absolute', bottom: 5, right: 5,
                            }}
                          >
                            {club.clubMembers && club.clubMembers.length === 1 ? '1 Member' : `${club.clubMembers?.length || 0} Members`}
                          </Typography>
                        </CardContent>
                      </Link>
                    </StyledCard>
                  ))}
                </CardContainer>
              </Grid>
            </Grid>
          </div>
        </Grid1>
      </Grid1>
    </Box>
  );
}
export default ClubsNew;