import * as React from 'react';
import { Typography, Link } from "@mui/material";

type Props = {};

export function Copyright(props: Props) {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="http://oncosakha.ru/">
                    Якутский республиканский онкологический диспансер
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
};
