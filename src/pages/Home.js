import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../App.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


export default function Home(props) {
    const classes = useStyles();
    const Products = [
        { image: 'https://miro.medium.com/max/2732/1*VTKsiByHMcWDIxpFawp4fg.png', title: "TODOLIST", text: "https://github.com/ramshanadeem/Todo-In-React" },
        { image: 'https://img.quizlet.com/tSRa4-700.jpg', title: "QUIZLET", text: "https://ramshanadeem.github.io/quiz-app/" },
        { image: 'https://zeroone.ws/wp-content/uploads/2015/03/proweb-home.jpg', title: "PROWEB", text: " https://ramshanadeem.github.io/pro-webdesign-/" },

    ];
    var items = [
        {
            name: "Winter Collection Volume III",
            image: 'https://cdn.shopify.com/s/files/1/2466/2147/files/winter_vol3_category_banner_ad82eee8-f487-4de4-a05b-7ab254f2c77b.jpg?v=1608023631'
        },
        {
            name: "MANS WEAR",
            image: 'https://cdn.shopify.com/s/files/1/2466/2147/files/men_jacket_Category_Banner.jpg?v=1605247873'

        },
        {
            name: "fOOT WEAR",
            image: 'https://cdn.shopify.com/s/files/1/2466/2147/files/WOMAN_FOOTWEAR_9001cc7e-0ecd-4aea-ab44-1bd6ff0682a7.jpg?v=1605337923'
        }
    ]
    const renderCard = (card, index) => {


        return (

            <Box mx={2}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={card.image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {card.text}

                            </Typography>
                            {/* <Link>
                <Button >{card.link}</Button>
                </Link> */}
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                    </CardActions>

                </Card>
            </Box>

        );
    }

    return (
        <>

            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            <Grid container style={{ paddingTop: '10%' }}>
                {Products.map(renderCard)}
            </Grid>
            <p>chbzjvcjdhvk</p>


        </>
    )
}
function Item(props) {
    return (
        <>
            <Paper>
                <h2>{props.item.name}</h2>
                <img style={{ width: '100%', height: '90%' }} src={props.item.image} />
                <Button style={{ marginTop: "1%", backgroundColor: '#00aecc' }} className="CheckButton">
                    Check it out!
            </Button>

            </Paper>



        </>
    )
}