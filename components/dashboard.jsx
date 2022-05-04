import React from 'react'
import styles from "../styles/dashboard.module.css"
import AccountMain from './userAccount/accountMain'
import AccountNav from './userAccount/accountNav'


export default function AccountOverview() {
  return (
    <div className={styles.dashboard + " d-md-flex justify-content-between align-items-start"}>
        <AccountNav />
        <AccountMain />
    </div>
  )
}
