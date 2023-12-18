import styles from "./settings-address-page.module.css";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import {useNavigate} from "react-router-dom";
import {FaCaretLeft} from "react-icons/fa6";
import {useContext, useEffect, useState} from "react";
import {DataContext} from "../context.js";
import axios from "axios";
import {DEFAULT_URL} from "../../utils/data.js";
import {scrollToTop, setPageTitle} from "../../utils/utils.jsx";
import Success from "../../components/success.jsx";
import Failed from "../../components/failed.jsx";

const SettingsAddressPage = () => {

    const {user, setUser} = useContext(DataContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        setPageTitle("Settings - Address");
        scrollToTop();
    }, []);

    useEffect(() => {
        setFormData(JSON.parse(JSON.stringify(user)));
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
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {address, city, state, zip_code, country} = formData;
        if(address && city && state && zip_code && country) {
            setLoading(true);
            axios.put(`${DEFAULT_URL}/api/users/${user.id}`, {address, city, state, zip_code, country},
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                })
                .then(() => {
                    setUser({...user, address, city, state, zip_code, country});
                    setLoading(false);
                    triggerSuccess()
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                    triggerFailed()
                })
        }
    }

    return (
        <>
            <Header/>
            <section className={styles.container}>
                <div className={styles.left}>
                    <span onClick={() => navigate("/settings/personal-information")}>Settings</span>
                    <span>Address <FaCaretLeft className={styles.icon}/></span>
                    <span onClick={() => navigate("/settings/bookings")}>Bookings</span>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h3>ADDRESS DETAILS</h3>
                    <div className={styles.top}>
                        <div className={styles.field}>
                            <label>STREET ADDRESS</label>
                            <input value={formData.address || ''} className="p-[8px] outline-0 border border-solid border-zinc-600 rounded-[3px]" type="text" name="address" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>CITY</label>
                            <input value={formData.city || ''} className="p-[8px] outline-0 border border-solid border-zinc-600 rounded-[3px]" type="text" name="city" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>STATE</label>
                            <input value={formData.state || ''} className="p-[8px] outline-0 border border-solid border-zinc-600 rounded-[3px]" type="text" name="state" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>ZIP CODE</label>
                            <input value={formData.zip_code || ''} className="p-[8px] outline-0 border border-solid border-zinc-600 rounded-[3px]" type="number" name="zip_code" onChange={handleChange}/>
                        </div>
                        <div className={styles.field}>
                            <label>COUNTRY</label>
                            <input value={formData.country || ''} className="p-[8px] outline-0 border border-solid border-zinc-600 rounded-[3px]" type="text" name="country" onChange={handleChange}/>
                        </div>
                    </div>
                    <button type="submit">SAVE CHANGES</button>
                </form>
            </section>
            <Footer/>
            {loading && <div className="fixed top-0 left-0 w-full h-screen bg-black/95 flex justify-center items-center">
                <div className="loader"></div>
            </div>}
            {success && <Success message="Saved Changes"/>}
            {failed && <Failed message="Failed Changes"/>}
        </>
    )
}

export default SettingsAddressPage;