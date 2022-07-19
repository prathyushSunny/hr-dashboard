import styles from './list.module.scss'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { announcementList, scheduleList } from './listTemplate';
import { useState } from 'react';

const List = (props) => {
  const {heading} = props;  
  const announcementTemplate = announcementList();
  const scheduleTemplate = scheduleList();
  const [expandStatus, setStatus] = useState(false);
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('en-us', { month: 'short' });
  const year = date.getFullYear();
  const dateString = `Today, ${day} ${month} ${year}`;

  return (
    <div className={`${styles.listContainer} ${expandStatus ? styles.active : ''} ${heading !== 'Announcement' ? styles.scheduleContainer : ''}`}>
      <div className={styles.headingContainer}>
        <h3>{heading}</h3>
        <span className={styles.dropdown}>
          <span>{dateString}</span>
          <KeyboardArrowDownRoundedIcon/>
        </span>      
      </div>
      <div className={styles.list}>
        {heading === 'Announcement' ? announcementTemplate : scheduleTemplate}
      </div>
      {
        heading === 'Announcement' ?
        <button onClick={() => setStatus(!expandStatus)} className={styles.openAnnouncements}>
          {expandStatus ? 'Hide All Announcements' :'See All Announcements'}
        </button> :
        <button onClick={() => setStatus(!expandStatus)} className={styles.openAnnouncements}>
          {expandStatus ? 'Hide All Schedules' :'See All Schedules'}
        </button>
      }
    </div>
  )
}

export default List;