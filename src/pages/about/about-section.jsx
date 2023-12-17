import styles from "./about-section.module.css";
import AboutCard from "./about-card.jsx";

const AboutSection = () => {

    const cards = [
        {
            heading: "Live in the Moment & Leave the Housekeeping to Us",
            body:
                <>
                    <p>S.A.M Cleaning Services is so much more than just a home cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love. We put The Extra In Your Ordinary , restoring balance to your life by taking care of your home. Life flies by in the blink of an eye, so it’s crucial to stop and enjoy it. With  S.A.M Cleaning Services, you can do just that.</p>
                    <span>Our house cleaning services cover every inch of your space. We can freshen up your bathroom, invigorate your kitchen, and restore your bedroom to ensure you have the beautiful and clean home you deserve. We’ll get deep into the corners and crevices to rid your space of any dust, germs, and bacteria to deliver a home that is both spotless and healthy.</span>
                </>,
            background: require("../../images/about1.png")
        },
        {
            heading: "You Expect A Lot, So We Deliver More",
            body: <p>We know that no two houses are the same, so there's no reason cleaning services should be the same, either. At S.A.M Cleaning Services, we take the time to listen and understand your needs. One of our expert representatives will work with you to create a custom cleaning program that will fit both your lifestyle and budget. If you ever have any concerns or need to make changes to your service, our friendly office staff is only a phone call away.</p>,
            background: require("../../images/about2.png")
        },
        {
            heading: "Experienced Team",
            body: <p>The company boasts a team of highly trained and experienced cleaning professionals. Our professional cleaners are dedicated to deliver excellent results and take pride in their work.</p>,
            background: require("../../images/about3.png")
        },
        {
            heading: "Customer Satisfaction ",
            body: <p>S.A.M Cleaning Services values customer satisfaction above all else. We strive to exceed customer expectations with every cleaning service they provide.</p>,
            background: require("../../images/about4.png")
        }
    ];

    return (
        <section className={styles.container}>
            <h1>About Us</h1>
            <h2>About S.A.M Cleaning<br/>Services</h2>
            {cards.map(({heading, body, background}, index) => {
                return <AboutCard heading={heading} body={body} background={background} index={index} key={index} />
            })}
        </section>
    )
}

export default AboutSection;