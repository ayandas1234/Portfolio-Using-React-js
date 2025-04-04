import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img1.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import emaillight from '../../assets/email_light.png'
import emaildark from '../../assets/email_dark.png'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const emailIcon = theme === 'light' ? emaillight : emaildark;

    const emailStyle = theme === 'dark' ? { backgroundColor: 'white', borderRadius: '50%' } : {};

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile Picture Of Ayan Das" />

                <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>
            </div>

            <div className={styles.info}>
                <h1>Ayan <br /> Das</h1>

                <h2>FullStack Developer</h2>

                <span>
                    <a href="https://twitter.com/" target='_blank'>
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/ayandas1234" target='_blank'>
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ayan-das6" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayanprojects2024@gmail.com" target='_blank'>
                        <img src={emailIcon} alt="Email icon" style={emailStyle} />
                    </a>
                </span>

                <p className={styles.description}>
                    With a passion for developing modern React web apps for commercial businesses.
                </p>

                <a href={CV} download>
                    <button className='hover'>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero