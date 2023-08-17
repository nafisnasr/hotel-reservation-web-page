import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'
import {AiOutlineSearch} from "react-icons/ai"

export default function Header() {
    return (
        <div className='header'>
            < Navbar />
            <div className="search-box-container container">
                <div className="search-box p-2 row" dir='rtl'>
                    <div className="search-item my-2 search-input col-lg-3 col-md-6 col-sm-11">
                        <span>تعداد نفرات</span>
                        <input type="text" placeholder='وارد کنید' />
                    </div>
                    <div className="search-item my-2 search-input col-lg-2 col-md-6 col-sm-11">
                        <span>تاریخ خروج</span>
                        <input type="text" placeholder='وارد کنید' />
                    </div>
                    <div className="search-item my-2 search-input col-lg-2 col-md-6 col-sm-11">
                        <span>تاریخ ورورد</span>
                        <input type="text" placeholder='وارد کنید' />
                    </div>
                    <div className="search-item my-2 search-input col-lg-3 col-md-6 col-sm-11">
                        <span>مقصد یا اقامتگاه </span>
                        <input type="text" placeholder='انتخاب مقصد' />
                    </div>
                    <div className="search-item  my-2 search-btn col-lg-1 col-md-6 col-sm-11">
                        <button className="btn btn-secondary"><AiOutlineSearch className="btn-icon" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
