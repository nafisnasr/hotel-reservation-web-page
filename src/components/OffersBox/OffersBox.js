import React from 'react'
import TitleBox from "../TitleBox/TitleBox"
import Offers from '../Offers/Offers'
import "./OffersBox.css"


export default function OffersBox() {
    return (
        <div className='offers-box'>
            <TitleBox title="اقامتگاه های پیشنهادی" desc="با ما بهترین را انتخاب کنید" />
            <div className="wrapper row">
                <Offers
                    title="بوم گردی رامسر"
                    id={1200}
                    city="مازندران - نمک آبرود"
                    price={500000}
                    img="/images/offers (1).jpg"
                />
                <Offers
                    title="ویلای مجلل رودبار کردان"
                    id={1300}
                    city="مازندران - نوشهر"
                    price={800000}
                    img="/images/offers (3).jpg"
                />
                <Offers
                    title="ویلای استخر دار کردان"
                    id={1400}
                    city="تهران - کردان"
                    price={1350000}
                    img="/images/offers (2).jpg"
                />

            </div>
        </div>
    )
}
