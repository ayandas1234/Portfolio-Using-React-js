import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='HTML:5' />
                <SkillList src={checkMarkIcon} skill='CSS' />
                <SkillList src={checkMarkIcon} skill='JavaScript' />
                <SkillList src={checkMarkIcon} skill='Node.js' />
                <SkillList src={checkMarkIcon} skill='Express.js' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='MongoDB' />
                <SkillList src={checkMarkIcon} skill='MongoDB Atlas' />
                <SkillList src={checkMarkIcon} skill='MongoDB Compass' />
                <SkillList src={checkMarkIcon} skill='Mongoose' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='TailWind CSS' />
                <SkillList src={checkMarkIcon} skill='DaisyUI' />
                <SkillList src={checkMarkIcon} skill='React.js' />
                <SkillList src={checkMarkIcon} skill='Next.js' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Redux Toolkit' />
                <SkillList src={checkMarkIcon} skill='Zustand' />
                <SkillList src={checkMarkIcon} skill='Git' />
                <SkillList src={checkMarkIcon} skill='GitHub' />
                <SkillList src={checkMarkIcon} skill='Vite' />
                <SkillList src={checkMarkIcon} skill='Socket.io' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Linux' />
                <SkillList src={checkMarkIcon} skill='Canva' />
                <SkillList src={checkMarkIcon} skill='Figma' />
                <SkillList src={checkMarkIcon} skill='DBMS' />
                <SkillList src={checkMarkIcon} skill='DSA' />
                <SkillList src={checkMarkIcon} skill='PostMan API' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='C' />
                <SkillList src={checkMarkIcon} skill='C++' />
                <SkillList src={checkMarkIcon} skill='JAVA' />
                <SkillList src={checkMarkIcon} skill='OOPS in JAVA' />
                <SkillList src={checkMarkIcon} skill='SQL' />
                <SkillList src={checkMarkIcon} skill='Python ' />
            </div>
        </section>
    )
}

export default Skills
