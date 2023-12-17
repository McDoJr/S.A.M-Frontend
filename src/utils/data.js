export const createUserObject = ({id, firstname, lastname, username, email, password, token, bookings = [], address, city, state, zip_code, country}) => {
    return {id, username, email, password, firstname, lastname, bookings, address, city, state, zip_code, country ,token};
}

export const createBookingObject = ({id, user_id, service, hours, price, time, date, total, aircon_type, quantity, address, city, state, zip_code, country}) => {
    return {id, user_id, service, hours, price, time, date, total, aircon_type, quantity, address, city, state, zip_code, country};
}

export const DEFAULT_URL = "http://localhost:1337";