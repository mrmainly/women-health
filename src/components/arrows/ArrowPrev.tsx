import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MenuItem } from '@mui/material'

import { ArrowPrevProps } from '../../interface';

const ArrowPrev: React.FC<ArrowPrevProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <MenuItem className="slick-arrow" onClick={onClick} style={{
            ...style,
            height: 60,
            width: 60,
            position: "absolute",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            top: '45%',
            left: 0,
            zIndex: 900,
            backgroundColor: '#EB5757'
        }}>
            <ArrowBackIcon fontSize={'large'} htmlColor={'white'} />
        </MenuItem>
    )
}

export default ArrowPrev