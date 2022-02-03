import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MenuItem } from '@mui/material'

import { ArrowNextProps } from '../../interface';

const ArrowNext: React.FC<ArrowNextProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <MenuItem className="slick-arrow" onClick={onClick} style={{
            ...style,
            height: 40,
            width: 40,
            position: "absolute",
            top: '50%',
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            right: 0,
            backgroundColor: '#EB5757',
        }}>
            <ArrowForwardIcon fontSize={'medium'} htmlColor={'white'} />
        </MenuItem>
    )
}

export default ArrowNext