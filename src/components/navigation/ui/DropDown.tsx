import styles from "./styles.module.scss"
import DropDownItem from "./DropDownItem";
import { type NavDropDown } from "../model";
import { BannerIcon } from "./BannerIcon";

export default function DropDown(navDropDown: NavDropDown) {

  const closeMenu = () => {
    navDropDown.updateState(false);
  }
  
  return (
    <div className={styles.dropDown}>
      <div className={styles.dropMenu}>
        <div className={styles.dropMenuSection}>
          {navDropDown.banner ? 
          <div className={styles.banner}>
            <div className={styles.bannerIcon}>              
              <BannerIcon iconName={navDropDown.bannerIcon ? navDropDown.bannerIcon : ''}></BannerIcon>
            </div>            
            <div className={styles.bannerTitle}>{navDropDown.bannerTitle}</div>
            <div className={styles.bannerDescription}>{navDropDown.bannerDescription}</div>
          </div> :
          ''}          
          <ul className={navDropDown.banner ? styles.dropMenuListGrid : styles.dropMenuList} onClick={closeMenu}>                        
            {navDropDown.dpItems.map(item => (
              <section key={item.id} onClick={closeMenu}>
                <DropDownItem item={item}></DropDownItem>
              </section>
            ))}
          </ul>    
        </div>      
      </div>
      
    </div>
  )
}