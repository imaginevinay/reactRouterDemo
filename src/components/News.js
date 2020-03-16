import React,{useState,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
     maxWidth:300,
     maxHeight:500,
     marginTop:50,
     margin:"auto" ,   
    },

    imgProp:{
        maxHeight:200,
        maxWidth:290
    },
    cardsStack:{
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)",
        gridAutoRows: "auto",         
        gridGap: "-1rem",
        marginBottom:200
    },
    center:{
        display:"block",
        textAlign:"center"
    }
  });

const News = ()=>{
    const classes = useStyles();
    useEffect(()=>{
        fetchTopHeadlines();
    },[])

    const [topNews,setItems] = useState([])
    
    const fetchTopHeadlines = async() => {
        const data = await (await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9406929465d649e6835539889a61095b")).json();
        const topHeadlines = data.articles;
        console.log("data",topHeadlines);
        setItems(topHeadlines);
    }

    return (
        <div className={classes.cardsStack}>
            {topNews.map(eachArticle =>(
                    <Card className={classes.root} elevation={3}>
                    <CardActionArea>
                    <img className={classes.imgProp} src={eachArticle.urlToImage} alt=""/>
                    <CardContent>
                        <Typography gutterBottom variant="p" component="p">
                        {eachArticle.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {eachArticle.source.name}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.center}>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">                    
                        <a href={eachArticle.url}>Learn More</a>
                    </Button>
                    </CardActions>
                </Card>
            ))}    
              </div>
    )}

export default News