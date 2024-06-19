import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OverviewPage from '../pages/OverviewPage'
import FavoritesPage from '../pages/FavoritesPage'
import ContactsPage from '../pages/ContactsPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/overview" element={<OverviewPage/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
      <Route path="/contacts" element={<ContactsPage/>} />

    </Routes>
  )
}

export default AppRoutes