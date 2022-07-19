import styles from './statsCard.module.scss';

const StatsCard = ({card}) => {
  const {name, value, men, women, graphImg, percent} = card;

  return (
    <div className={styles.card}>
      <div>
        <p>
          {name}
        </p>
        <h3>{value}</h3>
        <span>
          {men} Men
        </span>
        <span>
          {women} Women
        </span>
      </div>
      <div className={styles.statsGraph}>
        <img src={graphImg} alt="percentage"/>
        <div className={styles.percentagePill}>
          +{percent}% Past month
        </div>
      </div>          
    </div>
  )
}

export default StatsCard;