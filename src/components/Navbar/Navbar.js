import React, { useState } from 'react'
import { RiAccountCircleLine } from "react-icons/ri"
import { FaWpexplorer } from "react-icons/fa"
import RegisterModal from '../RegisterModal/RegisterModal'
import "./Navbar.css"

export default function Navbar() {

    const [isShowModal, setIsShowModal] = useState(false)
    const hideModal = () => setIsShowModal(false)

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <button
                            className="register-box"
                            onClick={() => {
                                setIsShowModal(true)
                                console.log("clicked");
                            }}
                        >
                            <span>ورود یا ثبت نام</span>
                            <span><RiAccountCircleLine className="icon" /></span>
                        </button>
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="explore-box mx-4">
                                <span>تجربه</span>
                                <span><FaWpexplorer className="icon" /></span>
                            </div>
                            <div className="navbar-title-container">
                                <span className="title">جایتو</span>
                                <span className="detail">قالب رزرو اقامتگاه</span>
                            </div>
                        </div>
                    </div>
                    <a className="logo-container mx-4" href='#'>
                        <img src="/images/jayto-logo-1.png" alt="" />
                    </a>
                </div>
            </nav>
            <RegisterModal onHide={hideModal} show={isShowModal} />
        </>
    )
}
