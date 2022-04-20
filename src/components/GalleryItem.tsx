import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const GalleryItem = (props: any) => {
    const card = props.data

    const dateFormatting = dateFormat(`${card.post_date}`, "mmmm dS, yyyy")

    return (
        <div className="cardDivStyle">
            <Link to={`/postShow/${props.cardId}`} className="cardLink" >
                <CardGroup className="cardStyleHover">
                    <Card className="cardStyle" >
                        <Card.Body>
                            <Card.Title className="cardTitle">{card.post_title}</Card.Title>
                            <Card.Subtitle >{card.post_author}</Card.Subtitle>
                            <Card.Text className="cardContent text-muted">{card.post_content}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="cardFooter">
                            <small className="cardFooterText">{dateFormatting}</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Link>
        </div>
    )
}

export default GalleryItem