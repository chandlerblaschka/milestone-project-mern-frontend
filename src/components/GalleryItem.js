import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const GalleryItem = (props) => {
    const card = props.data

    const cardStyle = {
        width: "250px",
        // height: "200px",
    }

    const divStyle = {
        padding: "10px"
    }

    return (
        <div style={divStyle}>
            <Link to={`/postShow/${props.cardId}`}>
            <CardGroup>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src='' />
                    <Card.Body>
                        <Card.Title>{card.post_title}</Card.Title>
                        <Card.Subtitle>{card.post_author}</Card.Subtitle>
                        <Card.Text>{card.post_content}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{card.post_date}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            </Link>
        </div>
    )
}

export default GalleryItem