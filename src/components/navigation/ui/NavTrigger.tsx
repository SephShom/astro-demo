import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import {IoIosArrowDown} from "react-icons/io"
import { type MenuTrigger } from "../model";
import DropDown from "./DropDown";

export default function NavTrigger({item}: {item: MenuTrigger}) {

  const menuRef = useRef<HTMLDivElement>(null);

  const callDropDown = () => {    
    setShouldShowElement(!shouldShowElement);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [shouldShowElement, setShouldShowElement] = useState(false);
  
  let timeoutId: any;
  useEffect(() => {

    if (isHovered) {
      setShouldShowElement(true);
    } else {
      timeoutId = setTimeout(() => {
        setShouldShowElement(false);
      }, 200); // El valor de 200 a la cantidad de milisegundos deseados
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHovered]);  

  const handleMouseEnter = () => {
    console.log(isHovered);
    console.log('Se llama a la funcion');
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChildMouseEnter = () => {    
    clearTimeout(timeoutId);
  };

  const handleChildMouseLeave = () => {
    setShouldShowElement(false);
  };

  return (
    <>
      {
        (item.type === 'dropdown') &&
        <div className={styles.container}>          
          <a href={item.route ? item.route : ''}  className={styles.menuButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {item ? item.name : "nothing"}
            <IoIosArrowDown className={styles.menuButtonIcon}></IoIosArrowDown>
          </a>      
          {
            (shouldShowElement) && (item.navItems) &&
            <div ref={menuRef} onMouseEnter={handleChildMouseEnter}  onMouseLeave={handleChildMouseLeave}>
              <DropDown 
                updateState={setShouldShowElement} 
                dpItems={item.navItems} 
                banner={item.banner}
                bannerTitle={item.bannerTitle}
                bannerDescription={item.bannerDescription}
                bannerIcon={item.bannerIcon}></DropDown>
            </div>
          }
        </div>
      }
      {
        (item.type === 'link') &&
        <a className="text-color-200" href={item.route ? item.route : '/'}>
          {item.name}
        </a>
      }
    </>
  )
}