import React, { useState } from 'react'
import TitleBox from '../TitleBox/TitleBox'
import City from '../City/City'
import "./CityBox.css"
import cityData from '../../Data'

export default function CityBox() {

    const [cityInfo, setCityInfo] = useState(cityData)

    return (
        <>
            <TitleBox
                title="اجاره ویلا در شهر های شمالی"
                desc="اقامتگاه تو شهرهای شمالی، در جایتو"
            />

            <div className="city-box">
                <div className="wrapper row">
                    {cityInfo.map(city => (
                        <City {...city} />
                    ))}
                </div>
            </div>
        </>
    )
}
