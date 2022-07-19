import styles from './sections.module.scss';
import List from '../Widgets/List';
import RecentActivity from '../Widgets/RecentActivity';

const SectionTwo = () => {
  return (    
    <div className={`${styles.sectionTwo} ${styles.sectionsContainer}`}>
      <RecentActivity/>
      <List heading={'Upcoming Schedule'}/>
    </div>
  )
}

export default SectionTwo;