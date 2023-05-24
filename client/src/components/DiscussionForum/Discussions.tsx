/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import {
  Card, CardContent, Typography, Box,
} from '@mui/material';
import { Discussion } from '../../typings/types';

type DiscussionListProps = {
  discussions: Discussion[];
  clubId: string;
};
function deepEqual(obj1: any, obj2: any) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  const allKeysMatch = keys1.every((key) => keys2.includes(key) && deepEqual(obj1[key], obj2[key]));
  if (!allKeysMatch) {
    return false;
  }
  return true;
}

const DiscussionList = memo(({ discussions, clubId }: DiscussionListProps) => (
  <>
    {discussions?.map((discussion) => (
      <Box sx={{ my: 1 }}>
        <Card key={discussion.id} className="club-card" variant="outlined">
          <Link
            to={`/clubs/${clubId}/discussion/${discussion.id}`}
            style={{ color: 'black', textDecoration: 'none' }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                {discussion.title}
              </Typography>
              <Typography variant="body2" className="club-card-body" style={{ textAlign: 'center', fontSize: '16px', color: 'gray' }}>
                {discussion.Posts && discussion.Posts.length === 1 ? '1 Post' : `${discussion.Posts?.length || 0} Posts`}
              </Typography>
              {/* <Typography variant="body2" className="club-card-body" style={{ textAlign: 'center', fontSize: '15px', color: 'gray' }}>
                {`Total Posts: ${discussion.Posts?.length || 0}`}
              </Typography> */}
              <Typography variant="body2" className="club-card-body" style={{ textAlign: 'center', fontSize: '12px', color: 'gray' }}>
                Last post:
                {' '}
                {discussion.Posts && discussion.Posts.length > 0 ? (
                  moment(discussion.Posts[discussion.Posts.length - 1].createdAt).calendar(null, {
                    lastDay: '[Yesterday at] h:mma',
                    sameDay: '[Today at] h:mma',
                    lastWeek: 'dddd [at] h:mma',
                    sameElse: 'MMM D [at] h:mma',
                  })
                ) : (
                  'No posts'
                )}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Box>
    ))}
  </>

), deepEqual);

export default DiscussionList;
