import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

interface UserRatingProps {
    value: number
}

export default function MiniStar({ value }: UserRatingProps) {


    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating value={value} readOnly />

        </Box>
    );
}