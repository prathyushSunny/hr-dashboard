import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import HeadsetRoundedIcon from '@mui/icons-material/HeadsetRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import styles from './dashboardNav.module.scss'
import { useSelector } from 'react-redux';

const DashboardNav = () => {
  const isNavOpen = useSelector(state => state.nav.isOpen);

  return (
    <nav className={`${styles.navContainer} ${isNavOpen ? styles.open : ''}`}>
      <h1>WeHR</h1>      
      <div className={styles.dashboardMenu}>
        <h3>MAIN MENU</h3>
        <div className={styles.menuOptions}>
          <button className={styles.active}>
            <DashboardRoundedIcon className={styles.dashboardIcon}/>
            <span>Dashboard</span>
          </button>
          <button>
            <PersonAddRoundedIcon className={styles.dashboardIcon}/>
            <span>Recruitment</span>
          </button>
          <button>
            <TodayRoundedIcon className={styles.dashboardIcon}/>
            <span>Schedule</span>
          </button>
          <button>
            <GroupsRoundedIcon className={styles.dashboardIcon}/>
            <span>Employee</span>
          </button>
          <button>
            <BadgeRoundedIcon className={styles.dashboardIcon}/>
            <span>Department</span>
          </button>
        </div>
        <div className={styles.dashboardMenu}>
          <h3>OTHER</h3>
          <div className={styles.menuOptions}>
            <button>
              <HeadsetRoundedIcon className={styles.dashboardIcon}/>
              <span>Support</span>
            </button>
            <button>
              <SettingsRoundedIcon className={styles.dashboardIcon}/>
              <span>Settings</span>
            </button>
          </div>
        </div>        
      </div>
    </nav>
  )
}

export default DashboardNav;