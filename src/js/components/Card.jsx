import React from 'react';

const Card = ({ title, ingredients, instructions, image }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="Card image" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    
                    <h6>Ingredientes:</h6>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>

                    <h6>Instrucciones:</h6>
                    <ol>
                        {instructions.map((step, index) => (
                            <li>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Card;