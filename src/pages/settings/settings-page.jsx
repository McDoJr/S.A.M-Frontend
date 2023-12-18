import styles from "./settings-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {FaCaretLeft} from "react-icons/fa6";
import {DataContext} from "../context.js";
import axios from "axios";
import {createUserObject, DEFAULT_URL} from "../../utils/data.js";
import ScrollTop from "../../components/scroll-top.jsx";
import Success from "../../components/success.jsx";
import Failed from "../../components/failed.jsx";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";

const SettingsPage = () => {

    const navigate = useNavigate();
    const {user, setUser} = useContext(DataContext);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        setPageTitle("Settings");
        scrollToTop();
    }, []);

    useEffect(() => {
        setFormData({...JSON.parse(JSON.stringify(user)),
            current_password: "",
            new_password: "",
            confirm_new_password: ""
        });
    }, [user]);

    const triggerSuccess = () => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1000);
    }
    const triggerFailed = () => {
        setFailed(true);
        setTimeout(() => setFailed(false), 1000);
    }

    const handleChange = (e) => {
        const {name, value}  = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleDetails = (userData) => {
        const {username, firstname, lastname} = formData;
        if(username || firstname || lastname) {
            setLoading(true);
            axios.put(`${DEFAULT_URL}/api/users/${user.id}`, {username, firstname, lastname},
                {
                    headers: {
                        Authorization: `Bearer ${userData.token}`,
                    },
                })
                .then(() => {
                    setUser({...userData, username, firstname, lastname});
                    setLoading(false);
                    triggerSuccess();
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                    triggerFailed();
                });
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {current_password, new_password, confirm_new_password, username, firstname, lastname} = formData;
        if(current_password && new_password && confirm_new_password) {
            setLoading(true);
            const url = `${DEFAULT_URL}/api/auth/change-password`;
            axios.post(
                url, {
                    currentPassword: current_password,
                    password: new_password,
                    passwordConfirmation: confirm_new_password
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            ).then(res => {
                const {user, jwt} = res.data;
                const userData = createUserObject({...user, token: jwt, bookings: user.bookings});
                if(username || firstname || lastname){
                    handleDetails(userData);
                    return;
                }
                setUser(userData);
                setLoading(false);
                triggerSuccess();
                setFormData({...formData, current_password: "", new_password: "", confirm_new_password: ""});
            }).catch(error => {
                console.log(error, "Failed password change");
                setLoading(false);
                triggerFailed();
                setFormData({...formData, current_password: "", new_password: "", confirm_new_password: ""});
            })
            return;
        }
        handleDetails(user);
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <div className={styles.left}>
                    <span>Settings <FaCaretLeft className={styles.icon}/></span>
                    <span onClick={() => navigate("/settings/address")}>Address</span>
                    <span onClick={() => navigate("/settings/bookings")}>Bookings</span>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h3>PERSONAL INFORMATION</h3>
                    <div className={styles.top}>
                        <div className={styles.field}>
                            <label>FIRST NAME</label>
                            <input value={formData.firstname || ''} className="p-[8px] outline-0 border border-solid border-zinc-500 rounded-[3px]" type="text" name="firstname" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>LAST NAME</label>
                            <input value={formData.lastname || ''} className="p-[8px] outline-0 border border-solid border-zinc-500 rounded-[3px]" type="text" name="lastname" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>NICK NAME</label>
                            <input value={formData.username || ''} className="p-[8px] outline-0 border border-solid border-zinc-500 rounded-[3px]" type="text" name="username" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>EMAIL ADDRESS</label>
                            <input value={formData.email || ''} className="p-[8px] outline-0 border border-solid border-zinc-500 rounded-[3px]" type="email" name="email" readOnly={true}/>
                        </div>
                    </div>
                    <h3>CHANGE PASSWORD</h3>
                    <div className={styles.bottom}>
                        <div className={styles.field}>
                            <label>CURRENT PASSWORD</label>
                            <input value={formData.current_password || ''} className="p-[8px] outline-0 border border-solid border-zinc-500 rounded-[3px]" type="password" name="current_password" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>NEW PASSWORD</label>
                            <input value={formData.new_password || ''} className="p-[8px] outline-0 border border-solid border-zinc-500 rounded-[3px]" type="password" name="new_password" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>RE-TYPE NEW PASSWORD</label>
                            <input value={formData.confirm_new_password || ''} className="p-[8px] outline-0 border border-solid border-zinc-500 rounded-[3px]" type="password" name="confirm_new_password" onChange={handleChange}/>
                        </div>
                    </div>
                    <button type="submit">SAVE CHANGES</button>
                </form>
            </section>
            <Footer/>
            {loading && <div className="fixed top-0 left-0 w-full h-screen bg-black/95 flex justify-center items-center z-100">
                <div className="loader"></div>
            </div>}
            {success && <Success message="Saved Changes"/>}
            {failed && <Failed message="Failed Changes"/>}
            <ScrollTop/>
        </>
    )
}

export default SettingsPage;