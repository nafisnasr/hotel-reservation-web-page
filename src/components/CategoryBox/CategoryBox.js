import React from 'react'
import Category from '../Category/Category'
import TitleBox from '../TitleBox/TitleBox'
import "./CategoryBox.css"

export default function CategoryBox() {
    return (
        <div className='category-box'>
            <TitleBox title="دسته بندی ها" desc="انتخاب شما کدام است؟"/>
            <div className="category-container container row">
                <Category title='هتل داخلی' detail='هتل، هتل آپارتمان' img='category-1.png' />
                <Category title='ویلا و آپارتمان' detail='آپارتمان، سوییت، ویلا' img='category-2.png' />
                <Category title='هاستل' detail='هاستل، مهمان پذیر' img='category-3.png' />
                <Category title='بومگردی' detail='بومگردی، هتل' img='category-4.png' />
            </div>
        </div>
    )
}
