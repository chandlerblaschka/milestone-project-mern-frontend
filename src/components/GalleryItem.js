import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const GalleryItem = (props) => {
    const card = props.data

    const cardStyle = {
        width: "300px",
        border: "none",
        boxShadow: "0px 0px 10px .5px lightgrey",
        color: "#313D53",
        minHeight: "215.19px"
    }

    const divStyle = {
        padding: "20px"
    }

    const dateFormatting = dateFormat(`${card.post_date}`, "mmmm dS, yyyy")

    return (
        <div style={divStyle}>
            <Link to={`/postShow/${props.cardId}`} style={{ textDecoration: "none", color: "black" }} >
                <CardGroup className="cardStyleHover">
                    <Card style={cardStyle} >
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title>{card.post_title}</Card.Title>
                            <Card.Subtitle >{card.post_author}</Card.Subtitle>
                            <Card.Text className="cardContent text-muted">{card.post_content}</Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: "#ECA72C" }}>
                            <small style={{ color: "#313D53" }}>{dateFormatting}</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Link>
        </div>
    )
}

export default GalleryItem