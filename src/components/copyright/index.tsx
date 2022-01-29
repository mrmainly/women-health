import * as React from 'react';
import { Typography, Link } from "@mui/material";
import { FormattedMessage } from "react-intl";

type Props = {};

export function Copyright(props: Props) {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}copyright_profile
                <Link color="inherit" href="http://oncosakha.ru/">
                    <FormattedMessage id="copyright_profile" />
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
};
