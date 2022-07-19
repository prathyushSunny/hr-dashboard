import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import profile from '../../assets/images/profile.jpg' 
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { navDispatcher } from '../../Redux/store';

const Header = ({ styles }) => {
  const [inputStatus, setStatus] = useState(false);    
  const dispatcher = useDispatch();  

  const navHandler = () => {    
    dispatcher(navDispatcher.toggleNav());
  }

  return (
    <div className={styles.headerContainer}>
      <div className="d-flex align-items-center">
        <button onClick={navHandler} className={styles.ham}>
          <MenuIcon/>
        </button>
        <SearchRoundedIcon className={`${styles.searchSm} ${styles.searchIcon}`}/>
        <div className={styles.searchContainer}>
          <div className={`${styles.inputActive} ${inputStatus && styles.active}`}></div>
          <input type="text" placeholder="Search" onFocus={() => setStatus(true)} onBlur={() => setStatus(false)}/>
          <SearchRoundedIcon className={styles.searchIcon}/>
        </div>
      </div>      
      <div className={styles.profileHandle}>
        <NotificationsRoundedIcon/>
        <TextsmsRoundedIcon/>
        <div className={styles.profileCta}>
          <img src={profile} alt="profile"/>
          <p>Prathyush</p>
          <KeyboardArrowDownRoundedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Header;