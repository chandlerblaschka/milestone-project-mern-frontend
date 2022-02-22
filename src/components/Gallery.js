import React from "react";
import GalleryItem from "./GalleryItem.js";

const Gallery = (props) => {
    let cards = Array.from(props.data);

    let cardsList = []

    const cardGroupStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",

    }

    const headerImageStyle = {
        maxWidth: "50%",
        height: "100%",
    }

    const titleStyle = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px"
    }

    const headerText = {
        backgroundColor: "#313D53",
        color: "white",
        width: "60%",
        textAlign: "center",
        alignContent: "center"
    }

    if (cards) {
        cardsList = cards.map((card, index) => {
            return <GalleryItem data={card} key={index} cardId={card.id} />;
        })
    }

    return (
        <div >
            <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", backgroundColor: "#313D53" }}>
                <div style={headerText}>
                    <h1>See what people are talking about below!</h1>
                    <h3 style={{ color: "#FE769B" }}>Or write your own story!</h3>
                </div>
                <img src={'../../gallery-bg.jpg'} style={headerImageStyle} />
            </div>
            <div style={titleStyle}>
                <h1>Story's Worth Reading</h1>
            </div>
            <div style={cardGroupStyle}>
                {cardsList}
            </div>
        </div>

    )
}

export default Gallery