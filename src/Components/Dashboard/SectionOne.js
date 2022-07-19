import styles from './sections.module.scss';
import JobCard from '../Widgets/JobCard';
import StatsCard from '../Widgets/StatsCard';
import List from '../Widgets/List';
import p5 from '../../assets/images/five.svg';
import p2 from '../../assets/images/two.svg';

const jobCards = [
  {
    tag: 'Available Position',
    value: '24',
    description: '4 Urgently needed',
    theme: 'red' 
  },
  {
    tag: 'Job Open',
    value: '10',
    description: '4 Urgently needed',
    theme: 'blue' 
  },
  {
    tag: 'New Employees',
    value: '24',
    description: '4 Department',
    theme: 'pink' 
  }
]

const statsCards = [
  {
    name: 'Total Employees',
    value: '216',
    men: '120',
    women: '96',
    graphImg: p2,
    percent: '2'
  },
  {
    name: 'Talent Request',
    value: '16',
    men: '6',
    women: '10',
    graphImg: p5,
    percent: '5'
  }
]

const SectionOne = () => {
  return (
    <div className={styles.sectionsContainer}>
      <div className={styles.jobCards}>
        {jobCards.map((card, index) => <JobCard key={index} card={card}/>)}
      </div>
      <div className={styles.statsCards}>
        {statsCards.map((card, index) => <StatsCard key={index} card={card}/>)}
      </div>
      <List heading={'Announcement'}/>      
    </div>
  )
}

export default SectionOne;