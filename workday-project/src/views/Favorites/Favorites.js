import React from 'react';
import Businesses from "../../components/Business/Business";
import "./favorites.css"
import {useQuery} from "@apollo/client";
import {FAVORITES} from "../../queries";

const Favorites = () => {
    const {loading, error, data} = useQuery(FAVORITES)
    let favorites = []

    if (loading) {
        return <p className={"loading"}>Loading...</p>
    }

    if (error) {
        return <p className={"error"}>Error: {error}</p>
    }

    if (data) {
        favorites = data.businesses

        return (
            <div className="favorites-container">
                <div className="favorites-hero">
                    <div className="favorites-list">
                        {favorites.map(favorite => <Businesses key={favorite.id} business={favorite}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Favorites;
