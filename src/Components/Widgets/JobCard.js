import styles from './jobCard.module.scss'

const JobCard = (props) => {  
  const {tag, value, description, theme} = props.card;

  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <p className={styles.cardTag}>{tag}</p>
      <h3 className={styles.cardValue}>{value}</h3>
      <span className={`${styles.cardDesc} ${styles[theme]}`}>{description}</span>
    </div> 
  )
}

export default JobCard;