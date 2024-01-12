import styles from "./styles.module.scss"
import { type NavDropDownItem } from "../model";


export default function DropDownItem({item} : {item: NavDropDownItem}) {
  return (
    <a href={item.route} className={styles.dropMenuItem}>
      <h3 className="text-lg font-bold">
        {item.title}
      </h3>
      <p>
        {item.description}
      </p>
    </a>
  )
}