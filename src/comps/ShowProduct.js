import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

function ShowProduct({ product }) {
    const classes = useStyles();
    return (
        <div key={product.id}>



            <div className='title'>{product.category}</div>
            <div><img width='100px' height='100px' src={product.image}></img></div>
            <button className='buyBtn'>Buy Now</button>






            {/*  <div className='title'>{product.category}</div>
            <div><img width='100px' height='100px' src={product.image}></img></div>
            <button className='buyBtn'>Buy Now</button> */}
        </div>

    )
}

export default ShowProduct