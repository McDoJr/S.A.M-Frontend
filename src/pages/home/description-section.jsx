import styles from "./description-section.module.css";

const DescriptionSection = () => {
    return (
        <section className={styles.container}>
            <p>Introducing <b>S.A.M Cleaning Services</b> - your premier choice for residential cleaning solutions in
                Butuan City. Our expert team is committed to delivering exceptional cleaning services,
                customized to suit your unique needs.</p>
            <p>Looking for a one-time deep clean or ongoing maintenance? We have you covered. Our focus
                <br/>on meticulous attention to detail and unwavering commitment to quality ensures that your
                <br/>home will always be in impeccable condition. Reach out to us today and discover how S.A.M
                <br/>Cleaning Services can make a positive impact in your living space.</p>
        </section>
    )
}

export default DescriptionSection;