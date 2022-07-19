import styles from './list.module.scss';
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export const announcementList = () => {
  return <>
    <div className={styles.listItem}>
      <div>
        <p>Outing schedule for every departement</p>
        <span>5 Minutes ago</span>
      </div>
      <div className={styles.ctas}>            
        <PushPinRoundedIcon/>                        
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <div className={styles.listItem}>
      <div>
        <p>Meeting HR Department</p>
        <span>Yesterday, 12:30 PM</span>
      </div>
      <div className={styles.ctas}>            
        <PushPinRoundedIcon/>                        
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <div className={styles.listItem}>
      <div>
        <p>IT Department need two more talents for UX/UI Designer position</p>
        <span>Yesterday, 09:15 AM</span>
      </div>
      <div className={styles.ctas}>            
        <PushPinRoundedIcon/>                        
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <div className={styles.listItem}>
      <div>
        <p>Outing schedule for every departement</p>
        <span>5 Minutes ago</span>
      </div>
      <div className={styles.ctas}>            
        <PushPinRoundedIcon/>                        
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <div className={styles.listItem}>
      <div>
        <p>Meeting HR Department</p>
        <span>Yesterday, 12:30 PM</span>
      </div>
      <div className={styles.ctas}>            
        <PushPinRoundedIcon/>                        
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <div className={styles.listItem}>
      <div>
        <p>IT Department need two more talents for UX/UI Designer position</p>
        <span>Yesterday, 09:15 AM</span>
      </div>
      <div className={styles.ctas}>            
        <PushPinRoundedIcon/>                        
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
  </>  
}

export const scheduleList = () => {
  return <>
    <span style={{fontSize: '12px'}}>
      Priority
    </span>
    <div className={styles.listItem}>
      <div>
        <p>Outing schedule for every departement</p>
        <span>5 Minutes ago</span>
      </div>
      <div className={styles.ctas}>                            
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <span style={{fontSize: '12px'}}>
      Other
    </span>
    <div className={styles.listItem}>
      <div>
        <p>Review candidate applications</p>
        <span>Today - 11.30 AM</span>
      </div>
      <div className={styles.ctas}>                            
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <div className={styles.listItem}>
      <div>
        <p>Short meeting with product designer from IT Departement</p>
        <span>Today - 09.15 AM</span>
      </div>
      <div className={styles.ctas}>                            
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <div className={styles.listItem}>
      <div>
        <p>Review candidate applications</p>
        <span>Today - 11.30 AM</span>
      </div>
      <div className={styles.ctas}>                            
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
    <div className={styles.listItem}>
      <div>
        <p>Short meeting with product designer from IT Departement</p>
        <span>Today - 09.15 AM</span>
      </div>
      <div className={styles.ctas}>                            
        <MoreHorizRoundedIcon/>        
      </div>
    </div>
  </>
}