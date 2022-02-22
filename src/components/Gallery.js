import React from "react";
import GalleryItem from "./GalleryItem.js";

const Gallery = (props) => {
    let cards = Array.from(props.data);

    let cardsList = []

    const cardGroupStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    }

    if (cards) {
        cardsList = cards.map((card, index) => {
            return <GalleryItem data={card} key={index} index={index}/>;
        })
    }

    return (
        <div>
            {/* <img src={'../../blog-image.jpg'} /> */}
            <div style={cardGroupStyle}>
                {cardsList}
            </div>
        </div>

    )
}

export default Gallery