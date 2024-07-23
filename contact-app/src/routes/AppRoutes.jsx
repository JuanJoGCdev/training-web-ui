import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OverviewPage from '../pages/OverviewPage'
import FavoritesPage from '../pages/FavoritesPage'
import ContactsPage from '../pages/ContactsPage'

const AppRoutes = ({ loading, error }) => {
  return (
    <Routes>
      <Route path="/overview" element={<OverviewPage loading={loading} error={error}/>} />
      <Route path="/favorites" element={<FavoritesPage loading={loading} error={error}/>} />
      <Route path="/contacts" element={<ContactsPage loading={loading} error={error}/>} />
      <Route path="/*" element={<OverviewPage loading={loading} error={error}/>} />

    </Routes>
  )
}

export default AppRoutes