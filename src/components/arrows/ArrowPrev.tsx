import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MenuItem } from '@mui/material'

import { ArrowPrevProps } from '../../interface';

const ArrowPrev: React.FC<ArrowPrevProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <MenuItem className="slick-arrow" onClick={onClick} style={{
            ...style,
            height: 40,
            width: 40,
            position: "absolute",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            top: '50%',
            zIndex: 900,
            backgroundColor: '#EB5757'
        }}>
            <ArrowBackIcon fontSize={'medium'} htmlColor={'white'} />
        </MenuItem>
    )
}

export default ArrowPrev