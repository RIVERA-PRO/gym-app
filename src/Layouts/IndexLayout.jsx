import React from 'react'
import Header from '../Pages/Header/Header'

import ButonScroll from '../Components/ButonScroll/ButonScroll'
import FooterPage from '../Pages/FooterPage/FooterPage'
import HeroPage from '../Pages/HeroPage/HeroPage'
import Hero1Page from '../Pages/Hero1Page/Hero1Page'
import PageCaracteristicas from '../Pages/PageCaracteristicas/PageCaracteristicas'

export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero1Page />
            <HeroPage />
            <PageCaracteristicas />
            <FooterPage />
            <ButonScroll />

        </div>
    )
}
