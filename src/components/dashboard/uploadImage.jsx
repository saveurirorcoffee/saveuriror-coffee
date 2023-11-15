import Container from '@mui/material/Container';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const UploadImage = () => {
    const [image, setImage] = useState('');
    const uploadImage = async (e) => {
        e.preventDefault();
        try {
            if (image == '') {
                throw new Error('Gambar tidak boleh kosong');
            }
            const formData = new FormData();
            formData.append('image', image);
            const postImage = await axios.post('https://example-api-ten.vercel.app/upload', formData)
            const saveImagePath = postImage && await axios.post('https://654caa8a77200d6ba8592f20.mockapi.io/image-paths', {
                path: postImage.data.path,
                publicID: postImage.data.filename.split('/')[1]
            })
            saveImagePath && swal('201 Successfully Upload', 'Gambar Berhasil Diupload', 'success')
        } catch (error) {
            swal('205 Cannot Upload', error.message, 'error');
        }
    }

    
    return (
        <Container className='mt-5' maxWidth="xl">
            <Typography variant="h4" align="center" gutterBottom>
                Upload a File
            </Typography>
            <form onSubmit={uploadImage}>
                <TextField
                    className='mb-4'
                    fullWidth
                    type="file"
                    InputProps={{ startAdornment: <CloudUploadIcon className='me-3' /> }}
                    onChange={(e) => { setImage(e.target.files[0]) }}
                    multiple={false}
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                    fullWidth
                    type='submit'
                >
                    Upload
                </Button>
            </form>
        </Container>
    )
}

export default UploadImage