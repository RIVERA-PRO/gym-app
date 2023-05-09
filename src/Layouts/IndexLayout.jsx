import React from 'react'
import Header from '../Pages/Header/Header'

import ButonScroll from '../Components/ButonScroll/ButonScroll'
import FooterPage from '../Pages/FooterPage/FooterPage'
import HeroPage from '../Pages/HeroPage/HeroPage'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <HeroPage />
            <FooterPage />
            <ButonScroll />

        </div>
    )
}
