import { useQuery, gql } from "@apollo/client";


const GetCharacters = () => {
    
    const GET_CHARACTERS = gql`
    query GetCharacters {
        characters{
            results{
                id
                name
                image
                }
            }
        }
    `;
    
    const { loading, error, data } = useQuery(GET_CHARACTERS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.characters.results.map(({ id, name, image }) => (
        <div className='grid' key={id}>
            <img src={image} />
            <p>{name}</p>
        </div>
    ));

}

export default GetCharacters