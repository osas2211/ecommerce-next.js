import React from 'react'
import styles from "../../styles/dashboard.module.css"
import { faPencil, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import { EditDetails } from './EditDetails'

export default function AccountMain() {
  const [show, setShow] = React.useState(false)
  const [toggleNameEdit, setToggleNameEdit] = React.useState(false)
  const [toggleAddressEdit, setToggleAddressEdit] = React.useState(false)
  const [togglePasswordEdit, setTogglePasswordEdit] = React.useState(false)
  const onHide = ()=> setShow(false)
  const onToggleNameEdit = () => {
    setShow(true)
    setToggleNameEdit(true)
    setToggleAddressEdit(false)
    setTogglePasswordEdit(false)
  }

  const onToggleAddressEdit = () => {
    setShow(true)
    setToggleNameEdit(false)
    setToggleAddressEdit(true)
    setTogglePasswordEdit(false)
  }

  const onTogglePasswordEdit = () => {
    setShow(true)
    setToggleNameEdit(false)
    setToggleAddressEdit(false)
    setTogglePasswordEdit(true)
  }

  return (
    <>
    <EditDetails 
      show={show} 
      onHide={onHide} 
      accEdit={toggleNameEdit} 
      addressEdit={toggleAddressEdit}
      passwordEdit={togglePasswordEdit} />
      <div className={styles.main + " rounded-3"}>
        <header className='h5 px-3 pt-3'>Account Overview</header>
        <div className={styles.hr}></div>
        <div className='g-0 px-4 px-md-5 row justify-content-center justify-content-md-between'>
          <div className='col-md-5 col-12 my-4 border border-1'>
            <header className='d-flex justify-content-between align-items-center p-3'>
              <p className='text-uppercase m-0'>Account Overview</p>
              <a className='pe-2 text-primary' style={{cursor: "pointer"}} onClick={onToggleNameEdit}><FontAwesomeIcon icon={faPencil}/></a>
            </header>
            <div className={styles.hr +" my-0"}></div>
            <div className='p-3'>
                <p className='p-0 m-0'>Frank John</p>
                <small className='text-muted'>osaretin.frank10@gmail.com</small>
                <a className='d-block text-uppercase mt-5 text-primary' style={{cursor: "pointer"}} onClick={onTogglePasswordEdit}>change password</a>
            </div>
          </div>

          <div className='col-md-5 col-12 border border-1 my-4'>
            <header className='d-flex justify-content-between align-items-center p-3'>
              <p className='text-uppercase m-0'>Address book</p>
              <a className='pe-2 text-primary' style={{cursor: "pointer"}} onClick={onToggleAddressEdit}><FontAwesomeIcon icon={faPencil}/></a>
            </header>
            <div className={styles.hr +" my-0"}></div>
            <div className='p-3'>
                <p className='p-0 m-0'>Your default shipping address:</p>
                <small className='text-muted d-block'>Osaretin Frank</small>
                <small className='text-muted d-block'>33 universal street off medical stores road</small>
                <small className='text-muted d-block'>Universal bus stop</small>
                <small className='text-muted d-block'>Egor-Egor, Edo</small>
            </div>
          </div>

          <div className='col-md-5 col-12 border border-1 mb-4'>
            <header className='d-flex justify-content-between align-items-center p-3'>
              <p className='text-uppercase m-0'>EazyShop Prime</p>
            </header>
            <div className={styles.hr +" my-0"}></div>
            <div className='p-3'>
                <p className='p-0 m-0 mb-2'>EazyShop Prime</p>
                <small className='text-muted'>EazyShop Prime is a loyalty program which offers members free delivery on all EazyShop Items (excluding EazyShop Global).</small>
                <Link href={"/"}><a className='d-block text-uppercase mt-5 btn btn-primary w-100 text-light'>Subscribe eazyshop prime</a></Link>
            </div>
          </div>

          <div className='col-md-5 col-12 border border-1 mb-4'>
            <header className='d-flex justify-content-between align-items-center p-3'>
              <p className='text-uppercase m-0'>EazyShop store Credit</p>
            </header>
            <div className={styles.hr +" my-0"}></div>
            <div className='p-3'>
                <p className='p-0 m-0 mb-2 fw-bold text-primary'>
                  <FontAwesomeIcon icon={faWallet}/>
                  <span className='ms-2'>$5500.00</span>
                </p>
    
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
