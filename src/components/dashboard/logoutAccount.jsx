import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const LogOutAccount = () => {
    const navigate = useNavigate();
    useEffect(() => {
        swal({
            title: 'Keluar',
            text: 'Apakah anda yakin ingin keluar?',
            icon: 'warning',
            dangerMode: true,
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: null,
                    visible: true,
                },
                confirm: {
                    text: "Keluar",
                    value: true,
                    visible: true,
                },
            },
        }).then(() => {
            localStorage.removeItem('auth')
            navigate('/admin/login')
        })
    }, [])
}

export default LogOutAccount