// Importing necessary React components, styles, and data
import React from 'react';
import './Cards.css';
import { CardsData } from '../../Data/Data';

// Cards component
const Cards = () => {
    // Function to handle card click events
    const handleCardClick = (title) => {
        // Displaying an alert with the clicked card's title
        alert(`Clicked on card with title: ${title}`);
    }

    // Rendering the Cards component
    return (
        <div className="Cards">
            {/* Mapping through the CardsData array to render individual cards */}
            {CardsData.map((Card, id) => {
                // Applying styles to each card based on the data
                const cardStyle = {
                    background: Card.color,
                    boxShadow: Card.boxShadow
                };

                // Returning a div for each card with its unique key and style
                return (
                    <div key={id} className="parentContainer" style={cardStyle} onClick={() => handleCardClick(Card.title)}>
                        {/* Displaying the title of the card */}
                        {Card.title}
                    </div>
                );
            })}
        </div>
    );
}

// Exporting the Cards component as the default export
export default Cards;
