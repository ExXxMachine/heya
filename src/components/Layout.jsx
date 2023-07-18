import {Link, Outlet} from "react-router-dom"
import logo from "../style/images/Logo.svg"
import {HandySvg} from 'handy-svg';
import classes from "../style/CSS/Layout.module.css"
import {Col, Row, Container} from "react-bootstrap";

const Layout = () => {
    return(
        <div>
            <header>
                <Container>
                    <Row>
                        <Col xs={3} ><HandySvg src={logo} className={classes.logo__svg}/></Col>
                        <Col xs={4}/>
                        <Col xs={1} className={"d-flex justify-content-center align-items-center"}><Link to={"/"} className={classes.link__layout}>Home</Link></Col>
                        <Col xs={1} className={"d-flex justify-content-center align-items-center"}><Link to={"/News"} className={classes.link__layout}>News</Link></Col>
                        <Col xs={1} className={"d-flex justify-content-center align-items-center"}><Link to={"/Login"} className={classes.link__layout}>Log in</Link></Col>
                        <Col xs={1} className={"d-flex justify-content-center align-items-center"}><Link to={"/Profile"} className={classes.link__layout}>Profile</Link></Col>
                    </Row>
                </Container>
            </header>
                <Outlet/>
            <footer>Copyright © 2020. Crafted with love.</footer>
        </div>
    )
}
export {Layout}