import styles from './Social.module.css'
import { Link } from 'react-router-dom'

export default function Social({
  column,
  dark,
  iconSize,
  center,
  socialLinks,
}) {
  const isColumn = column && 'flex-column'
  const isDark = dark ? `${styles.darkIcons}` : `${styles.lightIcons}`

  return (
    <>
      <ul
        className={`d-flex align-items-center gap-3 list-unstyled mb-0 ${center} ${isColumn}`}
      >
        {socialLinks.map(([path, style, className], i) => (
          <li key={i}>
            <Link
              to={path}
              className={`${styles[style]} ${iconSize}`}
              target="_blank"
            >
              <i className={`${className} ${isDark}`}></i>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
