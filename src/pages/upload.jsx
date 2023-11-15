import UploadImage from "../components/dashboard/uploadImage";
import AdminTemplate from "../sections/dashboard/adminTemplate";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGallery from "../components/landingPages/imageGallery"
import swal from 'sweetalert'

const Upload = () => {
    const [galleries, setGalleries] = useState();
    useEffect(() => {
        const getGalleries = async () => {
            const response = await axios.get('https://654caa8a77200d6ba8592f20.mockapi.io/image-paths');
            setGalleries(response.data)
        }
        getGalleries();
    }, [])

    const handleDelete = async (image) => {
        const {publicID, id} = image
        console.log(publicID);
        try {
            await axios.delete(`https://example-api-ten.vercel.app/delete/${publicID}`);
            await axios.delete(`https://654caa8a77200d6ba8592f20.mockapi.io/image-paths/${id}`);
            swal('200 Delete Successfully', 'Berhasil Menghapus Gambar', 'success');
        } catch (error) {
            swal('500 Cannot Delete', error.message, 'error');
        }
    }
    return (
        <AdminTemplate>
            <UploadImage />
            <div className="row w-100 mt-5 mt-4 ps-4 ps-md-5 ps-4">
                {galleries && galleries.map((image) =>
                    <ImageGallery key={image.id} image={image.path}>
                        <button onClick={() => handleDelete(image)} className="btn btn-danger">Delete</button>                   
                    </ImageGallery>
                )}
            </div>
        </AdminTemplate>
    );
};

export default Upload;