export const setPageTitle = (title) => {
    document.title = `S.A.M - ${title}`;
}

export const scrollToTop = () => {
    window.scroll({top: 0});
}

export const USER = 'admin', PASSWORD = "1234";

export const accountVerified = (email, pass) => {
    return USER === email && PASSWORD === pass;
}

export const loggedIn = () => {
    return localStorage.getItem("loggedIn") && JSON.parse(localStorage.getItem("loggedIn"));
}

export const notNull = (object) => {
    if(typeof object === "object" && Object.keys(object).length > 0) return true;
    if(typeof object === "object" && Object.keys(object).length === 0) return false;
    return object;
}

export const getBookings = () => {
    return loggedIn() ? JSON.parse(localStorage.getItem("loggedIn")).bookings : [];
}

export const getUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

export const services = [
    {
        image1: require("../images/deep_cleaning1.png"),
        heading: "DEEP CLEANING SERVICE",
        price: "1500.00",
        description: "A comprehensive house cleaning service for your home. Includes a full sweep, wipe down, sanitizing, and disinfecting of your bedrooms, bathrooms, kitchen, living room, dining and common areas.",
        cleaner1Image: require("../images/deep_cleaning1.png"),
        cleaner1Name: "Christine Heart",
        cleaner1Age: "28",
        cleaner2Image: require("../images/deep_cleaning2.png"),
        cleaner2Name: "Lovely Chi",
        cleaner2Age: "35",
        inclusions: [
            "1. Wipe down, cleaning, and disinfection of kitchen.",
            "2. Sweeping, mopping, and vacuuming of bedroom, living room, and dining area.",
            "3. Sweeping and mopping/wiping of all floor area, walls, cabinet doors and ceiling corners.",
            "4. Total scrubbing and disinfecting of bathroom.",
            "5. Cleaning of inside windows.",
            "6. Changing of sheets in the bedroom and vacuuming.",
            "7. Dusting and wiping of tables and open shelves and the items on it."
        ],
        exclusions: [
            "1. Moving or transporting big items or furniture such as tables, couches, or mattresses.",
            "2. Removing hard stains.",
            "3. Scrubbing entire floors and walls - our team will scrub selected areas.",
            "4. Cleaning of delicate objects like chandeliers.",
            "5. Cleaning ceilings higher than 10 feet.",
            "6. Cleaning inside household appliances, cabinets, cupboards, and shower curtains.",
            "7. Dusting and wiping of the items inside closed cabinets or closets.",
            "8. Organizing items inside cabinets and cupboards."
        ]
    },
    {
        image1: require("../images/aircon_cleaning1.png"),
        heading: "AIRCON CLEANING SERVICE",
        price: "975.00",
        description: "Our team of technicians are specially-trained to thoroughly clean Window Type, Split, and Standing (Floor Mounted) air conditioning systems.",
        cleaner1Image: require("../images/deep_cleaning2.png"),
        cleaner1Name: "Sam Milne",
        cleaner1Age: "25",
        cleaner2Image: require("../images/deep_cleaning1.png"),
        cleaner2Name: "Tom Je",
        cleaner2Age: "30",
        inclusions: [
            "1. Remove dust, dirt, and allergen particles to avoid health problems such as allergies and asthma.",
            "2. Maintain good air quality.",
            "3. Wash the aircon filter, aircon fan, and compressor.",
            "4. We will cover the aircon capacitor and electric wirings to prevent short circuits."
        ],
        exclusions: ["1. We do not check the freon level or add freon."]
    },
    {
        image1: require("../images/basic_cleaning.png"),
        heading: "BASIC CLEANING SERVICE",
        price: "750.00",
        description: "The S.A.M cleaning team begins by assessing the space to determine the cleaning requirements and any specific instructions from the client. We follow a systematic process to ensure that the essential areas of a home or space are cleaned and maintained.",
        cleaner1Image: require("../images/deep_cleaning1.png"),
        cleaner1Name: "Christine Heart",
        cleaner1Age: "28",
        cleaner2Image: require("../images/basic_cleaning2.png"),
        cleaner2Name: "Alex Tan",
        cleaner2Age: "26",
        inclusions: [
            "1. Dusting such as shelves, tabletops, window sills, and decorative items to remove dust and cobwebs.",
            "2. Surface wiping with a damp cloth or suitable cleaning solution.",
            "3. Vacuuming or sweeping hard floors to remove loose dirt.",
            "4. Mopping with an appropriate floor cleaner to remove stains and maintain cleanliness.",
            "5. Kitchen cleaning including wiping down countertops, sinks, and the exterior of appliances",
            "6. Bathroom cleaning involves cleaning and disinfecting the toilet, sink, and shower or bathtub.",
            "7. Trash removal and replacing liners as needed.",
            "8. Making beds and straightening.",
            "9. General tidying by putting away clutter and organizing items in living spaces.",
            "10. Surface disinfection such as light switches, door handles, and faucet handles."
        ],
        exclusions: [
            "1. Deep cleaning such as detailed grout cleaning, extensive mold removal, or thorough carpet shampooing.",
            "2. Window cleaning especially for multi-story homes.",
            "3. Laundry or dishwashing or cleaning the interior of appliances.",
            "4. Extensive organizing or decluttering.",
            "5. Exterior cleaning outdoor areas like patios, decks, or balconies.",
            "6. Repair work or replacing damaged components or fixtures."

        ]
    },
    {
        image1: require("../images/laundry_services.png"),
        heading: "LAUNDRY SERVICE",
        price: "600.00",
        description: "We help to save clients time and effort by providing a convenient and high-quality solution for cleaning and caring for their clothing and textiles. The process may vary slightly depending on the specific services offered by the laundry service provider.",
        cleaner1Image: require("../images/deep_cleaning2.png"),
        cleaner1Name: "Lovely Chi",
        cleaner1Age: "35",
        cleaner2Image: require("../images/basic_cleaning2.png"),
        cleaner2Name: "Alex Tan",
        cleaner2Age: "26",
        inclusions: [
            "1. Washing",
            "2. Drying, ensures that garments are dried at the appropriate temperature to prevent damage.",
            "3. Folding clothes",
            "4. Ironing/Pressing",
            "5. Stain Removal",
            "6. Dry Cleaning"
        ],
        exclusions: [
            "1. Heavy starch or sizing for clothing",
            "2. Specialty cleaning such as wedding gowns or antique textiles",
            "3. Repairs and alterations such as resizing or major repairs",
            "4. Specialty items",
            "5. Pest control"
        ]
    }
];

export const cards = [
    {
        name: "DEEP CLEANING SERVICE",
        heading: (
            <>
                <h2>Deep Cleaning</h2>
                <span>per hour</span>
                <h3>Php 1,500.00</h3>
            </>
        ),
        background: require("../images/deep_cleaning1.png")},
    {
        name: "AIRCON CLEANING SERVICE",
        heading: (
            <>
                <h2>Aircon Cleaning</h2>
                <span>per hour</span>
                <h3>Php 975.00</h3>
            </>
        ),
        background: require("../images/aircon_cleaning1.png")},
    {
        name: "BASIC CLEANING SERVICE",
        heading: (
            <>
                <h2>Basic Cleaning</h2>
                <span>per hour</span>
                <h3>Php 750.00</h3>
            </>
        ),
        background: require("../images/basic_cleaning.png")},
    {
        name: "LAUNDRY SERVICE",
        heading: (
            <>
                <h2>Laundry Service</h2>
                <span>per hour</span>
                <h3>Php 600.00</h3>
            </>
        ),
        background: require("../images/laundry_services.png")}
];

export const getBackground = (service) => {
    return cards.find(card => card.name === service).background;
}

export const formatString = (string) => {
    const data = string.split(" ");
    let formatted = "";
    for(let i = 0; i < data.length; i++) {
        const format = data[i].charAt(0) + data[i].slice(1).toLowerCase();
        formatted += i === 0 ? format : " " + format;
    }
    return formatted;
}