import { Grid } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
                <h2> Frotend Developer</h2>
                <p>ljasdlfjksad ljksdfjlk ajlskkdlf aslkdfjklas kljasdfjk askjdf jlasdjlkf lsjakfjkl aslsdajl kljsdafjk</p>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
                <img width="500" height="550"  src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/256057434_2835744603383239_7116494678881632123_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHuITaObDNW3P0LcQkTWo0IVuxaH88nuahW7Fofzye5qKiTWbKQl8MzQ83BjzvB8hkjak-Lc3Z5qInXb8V46PHc&_nc_ohc=0Dde2XDD30oAX9J-rgI&_nc_ht=scontent.fcgp27-1.fna&oh=99aa50894e3dcc2906d9b7bfd297a8a8&oe=61AE2488" />
            </Grid>
        </Grid>
    );
};

export default Banner;