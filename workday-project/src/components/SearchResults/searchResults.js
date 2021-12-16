import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {BUSINESSES} from "../../queries";
import Businesses from "../Business/Business";
import {getDistance} from "../../utils";

const SearchResults = ({searchTerm, myLocation}) => {

    const {loading, error, data} = useQuery(BUSINESSES, {
        variables: {name: searchTerm}
    })
    const [distances, setDistances] = useState({})
    const [mungedDistances, setMungedDistances] = useState([])
    let businesses = []

    useEffect(() => {
        let zips = []
        if(data) {
            zips = data.businesses.map(b => b.zip_code)
            let resp = getDistance(myLocation, zips)
            resp.then(resp => resp.json())
                .then(d => {
                    console.log(d)
                    setDistances(d.distances)
                })
            // let testData = {
            //     "77019": 16.652,
            //     "77024": 11.931,
            //     "77025": 19.481,
            //     "77069": 6.106,
            //     "77095": 3.08,
            //     "77338": 20.008,
            //     "77479": 24916,
            //     "77505": 33.899,
            //     "77584": 30.423,
            //     "77598": 38.807,
            // }
            // setDistances(testData)
        }
    }, [data, myLocation])

    useEffect(() => {
        let d = []
        if(distances) {
            for(const prop in distances) {
                d.push({
                    zip: prop,
                    distance: distances[prop]
                })
            }
            setMungedDistances(d)
        }
    }, [distances])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    if (data && mungedDistances.length !==0) {
        let bus = [...data.businesses]
        bus.forEach(b => {
            businesses.push({
                id: b.id,
                name: b.name,
                zipCode: b.zip_code,
                rating: b.rating,
                isFavorite: b.is_favorite,
                distance: mungedDistances.filter(d => d.zip === b.zip_code.toString())[0].distance
            })
        })
        businesses.sort((fst, snd) => fst.distance - snd.distance)
    }
    return (
        businesses.map(business => <Businesses key={business.id} business={business}/>)
    )
}

export default SearchResults;
