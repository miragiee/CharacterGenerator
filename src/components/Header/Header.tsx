import styles from "./Header.module.css"

export default function Header () {
    return(
        <header className={styles.Header}>
            <div className={styles.HeaderContent}>
                <div className={styles.Version}>version 0.0.1</div>
                <div className={styles.AppTitle}>
                    CHARACTER GENERATOR
                </div>
                <div className={styles.Links}>
                   <a href="https://github.com/miragiee/CharacterGenerator">
                       GitHub
                   </a>
                   <a href="https://youtube.com/@miragiee">YouTube</a>
                </div>                
            </div>
        </header>
    );
}