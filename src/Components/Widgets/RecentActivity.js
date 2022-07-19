import styles from './recentActivity.module.scss'

const RecentActivity = () => {
  const date = new Date();
  const day = date.getDate() - 5;
  const month = date.toLocaleString('en-us', { month: 'short' });
  const year = date.getFullYear();
  const dateString = `${day} ${month} ${year}`;  

  return (
    <div className={styles.recentActivity}>
      <p className={styles.headingContainer}>
        Recent Activity
      </p>
      <div className={styles.content}>
        <span className={styles.date}>
          10:40 AM, {dateString}
        </span>
        <p className={styles.heading}>You Posted a New Job</p>
        <p className={styles.description}>Kindly check the requirements and terms of work and make sure everything is right.</p>
        <div className={styles.ctaContainer}>
          <p>
            Today you performed 12 Activities
          </p>
          <button>
            See All Activities
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity;