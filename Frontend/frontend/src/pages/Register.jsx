import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'Customer'
    });
    const handleChange = (e) => {        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            console.log(error);
            alert('Registration failed. Please try again.');
        }
    };
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}
                className="w-50 mx-auto">
                <h2 className="mb-4">Register</h2>
                <input type="text" name="username" className="form-control pb-3 mb-3" placeholder="Name" value={formData.username} onChange={handleChange} required />
                <input type="email" name="email" className="form-control mb-3" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" className="form-control mb-3" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <select name="role" className="form-control mb-3" value={formData.role} onChange={handleChange}>
                    <option value="Customer">Customer</option>
                    <option value="RestaurantOwner">Restaurant Owner</option>
                    <option value="DeliveryPerson">Delivery Person</option>
                </select>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}
export default Register;
