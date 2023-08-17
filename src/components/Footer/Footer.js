import React from 'react'
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className='footer'>

            <div className="footer-wrapper row">
                <div className="footer-col col-lg-3 col-md-6 col-11">
                    <h5 className="title">نحوه ی رزرو اقامتگاه</h5>
                    <div className="footer-list">
                        <p>راهنمای رزرو اقامتگاه</p>
                        <p>شیوه های پرداخت</p>
                        <p>لغو رزرو</p>
                    </div>
                </div>
                <div className="footer-col col-lg-3 col-md-6 col-11">
                    <h5 className="title">خدمات مشتریان</h5>
                    <div className="footer-list">
                        <p>پرسش های متداول</p>
                        <p>چگونه اقامتگاه ثبت کنیم؟</p>
                        <p>حریم شخصی کاربران</p>
                    </div>
                </div>
                <div className="footer-col col-lg-3 col-md-6 col-11">
                    <h5 className="title">با جایتو</h5>
                    <div className="footer-list">
                        <p>مجله ما</p>
                        <p>درباره ی ما</p>
                        <p>تماس با ما</p>
                    </div>
                </div>
                <div className="social-media col-lg-3 col-md-6 col-11">
                    <div className="icon-box">
                        <img src="/images/jayto-logo-1.png" alt="" />
                    </div>
                    <h5 className="title">جایتو را در شبکه های اجتماعی دنبال کنید.</h5>
                    <div className="social-media-container">
                        <button><BsInstagram className='social-icon' /></button>
                        <button><BsTelegram className='social-icon' /></button>
                        <button><BiLogoGmail className='social-icon' /></button>
                        <button><BsWhatsapp className='social-icon' /></button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom p-2">
                <div className="footer-bottom-wrapper my-3 ">
                    <p className="text ">در تمامی سفر‌های شما، <span> همه روزه از ساعت ۷ صبح تا ۲ بامداد در کنار شما هستیم</span></p>
                    <div className="addresses col-lg-6 col-11">
                        <p>تلفن پشتیبانی: <a href="#">02122121</a></p>
                        <p>ایمیل: <a href="#">jayto@gmail.com</a></p>
                        <p>کد پستی: <a href="#">818123456</a></p>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="copyright-wrapper row">
                    <div className="right-section col-lg-6 col-11">
                        <p className="text">طراحی و توسعه جایتو، ایران سال 1402</p>
                        <p className="text">توسعه دهنده <a href="https://github.com/nafisnasr">@nafisnasr</a></p>
                    </div>
                    <div className="left-section col-lg-6 col-11">
                        <div className="copyright-img-container">
                            <img src="/images/copyright (1).png" alt="copyright image" />
                        </div>
                        <div className="copyright-img-container">
                            <img src="/images/copyright (2).png" alt="copyright image" />
                        </div>
                        <div className="copyright-img-container">
                            <img src="/images/copyright (3).png" alt="copyright image" />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
