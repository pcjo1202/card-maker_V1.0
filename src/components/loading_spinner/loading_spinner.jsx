import React from 'react'
import styles from './loading_spinner.module.css'
const LoadingSpinner = props =>
  <div className={styles.loading_wrapper}>
    <i className={`fas fa-spinner ${styles.loading}`} />
  </div>

export default LoadingSpinner
