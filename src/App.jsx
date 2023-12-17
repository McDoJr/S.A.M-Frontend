// noinspection JSUnresolvedReference

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/home-page.jsx";
import AboutPage from "./pages/about/about-page.jsx";
import ServicesPage from "./pages/services/services-page.jsx";
import ReviewsPage from "./pages/reviews/reviews-page.jsx";
import NoPage from "./pages/no-page/no-page.jsx";
import ContactPage from "./pages/contact/contact-page.jsx";
import SignUpPage from "./pages/authentication/sign-up-page.jsx";
import SignInPage from "./pages/authentication/sign-in-page.jsx";
import ServicesExpertsPage from "./pages/services/services-experts-page.jsx";
import ServicesOfferDetails from "./pages/services/services-offer-details.jsx";
import BookingDetailsPage from "./pages/booking/booking-details-page.jsx";
import SettingsPage from "./pages/settings/settings-page.jsx";
import SettingsAddressPage from "./pages/settings/settings-address-page.jsx";
import SettingsBookings from "./pages/settings/settings-bookings.jsx";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import Cookies from "universal-cookie";
import {DataContext} from "./pages/context.js";
import axios from "axios";
import {createBookingObject, createUserObject, DEFAULT_URL} from "./utils/data.js";
import BookingPaymentPage from "./pages/booking/booking-payment-page.jsx";

const App = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const cookies = new Cookies();

    useEffect(() => {
        const token = cookies.get("token");
        // if token exist in cookies, then load the existing user
        if(token) {
            // Set the loading state to true, so it will render the loading animation while waiting for the data
            // to be fetched from the database
            setLoading(true);
            // Decode the token and get the user's id
            const {id} = jwtDecode(token);
            // Get existing user's data from the database
            axios.get(`${DEFAULT_URL}/api/users/${id}`)
                .then(res => {
                    // When successful
                    const user = createUserObject({...res.data, token});
                    const url = `${DEFAULT_URL}/api/bookings?filters[user_id][$eq]=${user.id}&pagination[page]=1&pagination[pageSize]=1000`;
                    axios.get(url)
                        .then(res => {
                            const bookings = res.data.data.reduce((list, data) => {
                                const booking = createBookingObject({...data.attributes, id: data.id});
                                list.push(booking);
                                return list;
                            }, []);
                            setUser({...user, bookings});
                            setLoading(false);
                        }).catch(error => {
                            console.log(error);
                            setLoading(false);
                        })
                })
                .catch(error => {
                    // When failure
                    console.log(error);
                    setLoading(false);
                });
        }
    }, []);

    // If token exist in cookies, then render loading state while waiting for the user data to be loaded from database
    if(loading) {
        return (
            <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black/95">
                <div className="loader"></div>
            </div>
        )
    }

    const handleLogin = (userData) => {
        const {token} = userData;
        const decoded = jwtDecode(token);
        const url = `${DEFAULT_URL}/api/bookings?filters[user_id][$eq]=${userData.id}&pagination[page]=1&pagination[pageSize]=1000`;
        axios.get(url)
            .then(res => {
                const bookings = res.data.data.reduce((list, data) => {
                    const booking = createBookingObject({...data.attributes, id: data.id});
                    list.push(booking);
                    return list;
                }, []);
                setUser({...userData, bookings});
            }).catch(error => {
                console.log(error);
                setUser(userData);
            })
        cookies.set("token", token, {
            expires: new Date(decoded.exp * 1000)
        });
    }

    const handleLogout = () => {
        cookies.remove("token");
        setUser({});
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<DataContext.Provider value={{user, handleLogout}}><HomePage/></DataContext.Provider>}/>
                <Route path="/home" element={<DataContext.Provider value={{user, handleLogout}}><HomePage/></DataContext.Provider>}/>
                <Route path="/about" element={<DataContext.Provider value={{user, handleLogout}}><AboutPage/></DataContext.Provider>}/>
                <Route path="/services" element={<DataContext.Provider value={{user, handleLogout}}><ServicesPage/></DataContext.Provider>}/>
                <Route path="/services/experts" element={<DataContext.Provider value={{user, handleLogout}}><ServicesExpertsPage/></DataContext.Provider>}/>
                <Route path="/services/offer-details" element={<DataContext.Provider value={{user, handleLogout}}><ServicesOfferDetails/></DataContext.Provider>}/>
                <Route path="/reviews" element={<DataContext.Provider value={{user, handleLogout}}><ReviewsPage/></DataContext.Provider>}/>
                <Route path="/contact" element={<DataContext.Provider value={{user, handleLogout}}><ContactPage/></DataContext.Provider>}/>
                <Route path="/booking/booking-details" element={<DataContext.Provider value={{user, setUser, handleLogout}}><BookingDetailsPage/></DataContext.Provider>}/>
                <Route path="/booking/booking-details/payment" element={<DataContext.Provider value={{user, setUser, handleLogout}}><BookingPaymentPage/></DataContext.Provider>}/>
                <Route path="/signin" element={<DataContext.Provider value={{user, handleLogout, handleLogin}}><SignInPage/></DataContext.Provider>}/>
                <Route path="/signup" element={<DataContext.Provider value={{user, handleLogout, handleLogin}}><SignUpPage/></DataContext.Provider>}/>
                <Route path="/settings/personal-information" element={<DataContext.Provider value={{user, setUser, handleLogout}}><SettingsPage/></DataContext.Provider>}/>
                <Route path="/settings/address" element={<DataContext.Provider value={{user, setUser, handleLogout}}><SettingsAddressPage/></DataContext.Provider>}/>
                <Route path="/settings/bookings" element={<DataContext.Provider value={{user, setUser, handleLogout}}><SettingsBookings/></DataContext.Provider>}/>
                <Route path="*" element={<DataContext.Provider value={{user, handleLogout}}><NoPage/></DataContext.Provider>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;