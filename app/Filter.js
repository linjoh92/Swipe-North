import styles from './page.module.css'

const Filter = () => {

    return (
    <div className={styles.filterContainer}>
        <div>Vad</div>
        <div>
            <input placeholder='Jobbtitel, nyckelord'></input>
        </div>
    </div>
      )
    };
    
    export default Filter;