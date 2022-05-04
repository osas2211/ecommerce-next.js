import React from 'react'
import { Card } from 'react-bootstrap'
import styles from "../../styles/dashboard.module.css"
import { faUser, faShop, faMessage, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function AccountNav() {
  return (
    <div className={styles.nav + " rounded mx-auto mx-md-0"}>
        <Card>
            <Card.Header className='border-0'>
                <Link href={"/customer/account/dashboard"}>
                    <a>
                        <FontAwesomeIcon icon={faUser}/>
                        <small className='ms-3'>My EazyShop Account</small>
                    </a>
                </Link>
            </Card.Header>

            <Card.Body>
                <div className='mb-3'>
                    <Link href={"/customer/account/dashboard"}>
                        <a>
                            <FontAwesomeIcon icon={faShop}/>
                            <small className='ms-3'>My Orders</small>
                        </a>
                    </Link>
                </div>
                <div className='my-3'>
                    <Link href={"/customer/account/dashboard"}>
                        <a>
                            <FontAwesomeIcon icon={faMessage}/>
                            <small className='ms-3'>My Inbox</small>
                        </a>
                    </Link>
                </div>
                <div className='mt-3'>
                    <Link href={"/customer/account/dashboard"}>
                        <a>
                            <FontAwesomeIcon icon={faHeartCirclePlus}/>
                            <small className='ms-3'>Saved Items</small>
                        </a>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}
