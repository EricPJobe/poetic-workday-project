import { gql } from '@apollo/client'

export const BUSINESSES = gql`
    query GetBusinesses($name: String) {
        businesses(where: {name: {_eq: $name}}) {
            id
            name 
            rating
            zip_code
            is_favorite
        }
    }
`

export const FAVORITES = gql`
    query GetFavorites {
        businesses(where: {is_favorite: {_eq: true}}) {
            id
            name
            rating
            zip_code
            is_favorite
        }
    }
`
export const UPDATE_RATING = gql`
    mutation UpdateRating($id: Int!, $rating: Int) {
        update_businesses_by_pk(
            pk_columns: {id: $id}
            _set: {rating: $rating}
        ){    
          id
          rating
        }
    }
`;

export const UPDATE_FAVORITES = gql`
    mutation UpdateFavorites($id: Int!, $isFavorite: Boolean) {
        update_businesses_by_pk(
            pk_columns: {id: $id}
            _set: {is_favorite: $isFavorite}
        ){
            id
            is_favorite
        }
    }
`;
