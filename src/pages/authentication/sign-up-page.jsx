import styles from "./sign-up-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import {createUserObject, DEFAULT_URL} from "../../utils/data.js";
import {DataContext} from "../context.js";

const SignUpPage = () => {

    const navigate = useNavigate();
    const {handleLogin} = useContext(DataContext);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({firstname: "", lastname: "", email: "", password: "", confirm_password: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {firstname, lastname, email, password, confirm_password} = formData;
        if(firstname && lastname && email && password && confirm_password) {
            setLoading(true);
            axios.post(`${DEFAULT_URL}/api/auth/local/register`, {
                username: firstname,
                email,
                password,
                firstname,
                lastname,
            }).then(res => {
                const {user, jwt} = res.data;
                handleLogin(createUserObject({...user, token: jwt}));
                setLoading(false);
                navigate("/");
            }).catch(error => {
                console.log(error);
                setLoading(false);
            })
            // handleAddUser({uuid: crypto.randomUUID(), firstname, lastname, nickname: "", email, password, address: "", city: "", state: "", zipcode: "", country: "", bookings: []});
            // navigate("/");
        }
        setFormData({firstname: "", lastname: "", email: "", password: "", confirm_password: ""});
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <h1>Already have an account? <Link to="/signin">Log-in here!</Link></h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Create Account</h2>
                    <label>First Name</label>
                    <input type="text" value={formData.firstname} name="firstname" placeholder="Enter your first name *" onChange={handleChange}/>
                    <label>Last Name</label>
                    <input type="text" value={formData.lastname} name="lastname" placeholder="Enter your last name *" onChange={handleChange}/>
                    <label>Email</label>
                    <input type="text" value={formData.email} name="email" placeholder="Enter your email address *" onChange={handleChange}/>
                    <label>Create Password</label>
                    <input type="password" value={formData.password} name="password" placeholder="Enter your desired password *" onChange={handleChange}/>
                    <label>Confirm Password</label>
                    <input type="password" value={formData.confirm_password} name="confirm_password" placeholder="Confirm your password *" onChange={handleChange}/>
                    <button type="submit">Create Account</button>
                    <button type="button">Sign up using Google</button>
                </form>
            </section>
            {loading && <div className="fixed top-0 left-0 w-full h-screen bg-black/95 flex justify-center items-center">
                <div className="loader"></div>
            </div>}
            <Footer/>
        </>
    )
}

export default SignUpPage;