import ImageGallery from "../../components/landingPages/imageGallery"
import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [galleries, setGalleries] = useState();
    useEffect(() => {
        const getGalleries = async () => {
            const response = await axios.get('https://654caa8a77200d6ba8592f20.mockapi.io/image-paths');
            setGalleries(response.data)
        }

        getGalleries();
    }, [])
    return (
        <>
            {galleries && galleries.map((image) =>
                <ImageGallery key={image.id} image={image.path} />
            )}
        </>
    )
}

export default Gallery