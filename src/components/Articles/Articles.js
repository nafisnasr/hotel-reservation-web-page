import React from "react";
import TitleBox from "../TitleBox/TitleBox"
import Article from "../Article/Article";
import "./Articles.css"

export default function Articles() {
    return (
        <>
            <TitleBox
                title="مقاله های جایتو"
                desc="با ما بروز باشید!"
            />
            <div className="article-box">
                <div className="wrapper row">
                    <Article
                        title="میزبانی جایتو و کسب درآمد"
                        desc="اطلاعات و تصاویر اقامتگاه خود را ثبت کرده و کسب درآمد کنید."
                        img="/images/article-img-1.jpg"
                    />
                    <Article
                        title="روستا گردی با جایتو"
                        desc="سفر به بکرترین نقاط ایران و تجربه‌ی زیستن با مردمان محلی"
                        img="/images/article-img-2.jpg"
                    />
                </div>
            </div>
        </>
    );
}