import React from 'react'
import Header from '../../components/Header/Header'
import CategoryBox from '../../components/CategoryBox/CategoryBox'
import Ads from '../../components/Ads/Ads'
import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'
import Articles from '../../components/Articles/Articles'
import CityBox from '../../components/CityBox/CityBox'
import OffersBox from '../../components/OffersBox/OffersBox'
import "./Index.css"

export default function Index() {
  return (
    <>
      <Header />
      <OffersBox/>
      <AboutUs />
      <CategoryBox />
      <Ads />
      <CityBox />
      <Articles />
      <Footer />
    </>
  )
}
