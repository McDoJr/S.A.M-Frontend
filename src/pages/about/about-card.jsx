import styles from "./about-card.module.css";

const AboutCard = ({heading, body, background, index}) => {
    return (
        <section className={styles.container}>
            <img src={background} alt="image.png" style={{order: (index % 2 === 0 ? 2 : 1)}}/>
            <div className={styles.details}  style={{order: (index % 2 === 0 ? 1 : 2),
                padding: (index % 2 === 0 ? "50px 50px 50px 0" : "50px 0 50px 50px")}}>
                <h3>{heading}</h3>
                {body}
            </div>
        </section>
    )
}

export default AboutCard;