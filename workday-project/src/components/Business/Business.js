import {useMutation} from "@apollo/client";
import {UPDATE_FAVORITES, UPDATE_RATING} from "../../queries";
import React from "react";
import "./business.css"
import {Rating} from "@mui/material";

const Businesses = ({business}) => {
    console.log(business)

    const [updateFavorites] = useMutation(UPDATE_FAVORITES)
    const [updateRating] = useMutation(UPDATE_RATING)

    const onAddToFavorites = (event, id) => {
        updateFavorites({
            variables: {
                id: id,
                isFavorite: "true"
            }
        })
    }

    const onRatingChange = (event, newValue, id) => {
        console.log(newValue)
        updateRating({
            variables: {
                id: id,
                rating: newValue
            }
        })
    }

    return (
        <div className={"business-container"} key={business.id}>
            <p className={"business-name"}>{business.name}</p>
            <p className={"business-zip"}>Location: {business.zipCode}</p>
            <p className={"business-distance"}>Distance from you: {business.distance} mi.</p>
            <div className={"business-rating"}>
                <Rating
                    name={"rating"}
                    value={business.rating}
                    onChange={(e, newValue) => onRatingChange(e, newValue, business.id)} />
            </div>
            <div className={"add-to-favorites"}>
                { !business.isFavorite && <button className={"favorites-button"} onClick={(e) => onAddToFavorites(e, business.id)}>Add to Favorites</button> }
            </div>
        </div>
    )

}

export default Businesses
