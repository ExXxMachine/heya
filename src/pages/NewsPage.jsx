import classes from "../style/CSS/News.module.css"
import img from "../style/images/Image.png"
import img2 from "../style/images/Image2.png"
import {Link} from "react-router-dom";

const NewsPage = () => {
    return(
        <div className={classes.news__body}>
            <div className={classes.news__block}>
                 <img src={img}/>
                <div className={classes.content}>
                    <div className={classes.h2__blue}>FEATURED</div>
                    <div className={classes.h1}>Cheap Airline Tickets Great Ways To Save</div>
                    <div className={classes.h2}>In this digital generation where information can be easily obtained within seconds, business cards ...</div>
                    <Link to={"/info"} className={classes.h2}>See more...</Link>
                </div>
            </div>
            <div className={classes.news__block}>
                <img src={img2}/>
                <div className={classes.content}>
                    <div className={classes.h2__blue}>FEATURED</div>
                    <div className={classes.h1}>Cheap Airline Tickets Great Ways To Save</div>
                    <div className={classes.h2}>In this digital generation where information can be easily obtained within seconds, business cards ...</div>
                    <Link to={"/info"} className={classes.h2}>See more...</Link>
                </div>
            </div>
        </div>
    )
}
export {NewsPage}