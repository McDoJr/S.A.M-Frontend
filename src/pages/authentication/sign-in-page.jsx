import styles from "./sign-in-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import {createUserObject, DEFAULT_URL} from "../../utils/data.js";
import {DataContext} from "../context.js";

const SignInPage = () => {
    const navigate = useNavigate();
    const {handleLogin} = useContext(DataContext);
    const [formData, setFormData] = useState({email: "", password: ""});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = formData;
        if(email && password){
            setLoading(true);
            axios.post(`${DEFAULT_URL}/api/auth/local`, {
                identifier: email,
                password,
            }).then(res => {
                const {user, jwt} = res.data;
                handleLogin(createUserObject({...user, token: jwt}));
                setLoading(false);
                navigate("/");
            }).catch(error => {
                console.log(error);
                setLoading(false);
            })
        }
        setFormData({email: "", password: ""});
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label>Email</label>
                    <input type="text" value={formData.email} name="email" placeholder="Enter your email address *" onChange={handleChange}/>
                    <label>Password</label>
                    <input type="password" value={formData.password} name="password" placeholder="Enter your password *" onChange={handleChange}/>
                    <button type="submit">SIGN IN</button>
                    <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
                </form>
            </section>
            {loading && <div className="fixed top-0 left-0 w-full h-screen bg-black/95 flex justify-center items-center">
                <div className="loader"></div>
            </div>}
            <Footer/>
        </>
    )
}

export default SignInPage;