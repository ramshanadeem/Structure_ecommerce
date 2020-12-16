import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ShowProduct from '../comps/ShowProduct'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
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
export default function Product() {
    const classes = useStyles();
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(prod => {
                console.log(prod)
                setProduct(prod)


            }
            )

    }, [])
    console.log(products)

    return (
        <>
            <Box mx={2}>
                <Grid style={{ marginTop: '2%' }} container spacing={3}>

                    {products.map((product) => (
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                < ShowProduct product={product} />
                            </Paper>
                        </Grid>
                    ))}


                </Grid>
            </Box>
        </>
    )
}