import styles from './dashboard.module.scss'
import Header from './Header';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import { useSelector, useDispatch } from 'react-redux';
import { navDispatcher } from '../../Redux/store';

const Dashboard = () => {
  const dispatcher = useDispatch();  
  const isNavOpen = useSelector(state => state.nav.isOpen);

  const navHandler = () => {    
    dispatcher(navDispatcher.toggleNav());
  }

  return (
    <div className={styles.dashboardContainer}>
      <div onClick={navHandler} className={`${styles.navBackdrop} ${isNavOpen ? styles.open : ''}`}></div>
      <Header styles={styles}/>
      <h3 className={styles.heading}>Dashboard</h3>
      <div className={styles.dashboardContent}>
        <SectionOne/>
        <SectionTwo/>
      </div>      
    </div>
  )
}

export default Dashboard;