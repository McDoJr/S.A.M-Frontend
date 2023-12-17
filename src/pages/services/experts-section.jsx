import styles from "./experts-section.module.css";
import ServiceCard from "./service-card.jsx";

const ExpertsSection = () => {

    const cards = [
        {
            heading: (
                <>
                    <h2>Christine Heart</h2>
                    <h3>Cleaner</h3>
                </>
            ),
            background: require("../../images/deep_cleaning1.png")
        },
        {
            heading: (
                <>
                    <h2>Alex Tan</h2>
                    <h3>Cleaner</h3>
                </>
            ),
            background: require("../../images/basic_cleaning2.png")
        },
        {
            heading: (
                <>
                    <h2>Lovely Chi</h2>
                    <h3>Cleaner</h3>
                </>
            ),
            background: require("../../images/deep_cleaning2.png")
        },
        {
            heading: (
                <>
                    <h2>Sam Milne</h2>
                    <h3>Cleaner</h3>
                </>
            ),
            background: require("../../images/aircon_cleaning2.png")
        },
        {
            heading: (
                <>
                    <h2>Tom Je</h2>
                    <h3>Cleaner</h3>
                </>
            ),
            background: require("../../images/aircon_cleaning1.png")
        },
        {
            heading: (
                <>
                    <h2>Angela Perez</h2>
                    <h3>Cleaner</h3>
                </>
            ),
            background: require("../../images/deep_cleaning3.png")
        }
    ];

    return (
        <section className={styles.container}>
            <h1>Our Expert Cleaners</h1>
            <div className={styles.box}>
                {cards.map(({heading, background}, index) => {
                    return <ServiceCard heading={heading} background={background} margin="mt-[100px] mx-[30px]" color="#D9D9D9" align="center" handleClick={() => null} index={index} key={index}/>
                })}
            </div>
        </section>
    )
}

export default ExpertsSection;