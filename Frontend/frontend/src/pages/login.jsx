import{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        email: '',
        password: ''    });
    const handleChange = (e) => {        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {        e.preventDefault();
        try{
            const res= await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            alert('Login successful!');
            navigate('/');
        } catch(error){
            console.log(error);
            alert('Login failed.');
        }
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg w-96">

            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border p-2 mb-3"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border p-2 mb-3"
                onChange={handleChange}
            />
            <button className='bg-black text-white w-full p-2 rounded'>Login</button>
            </form>
        </div>
    );
}
export default Login;