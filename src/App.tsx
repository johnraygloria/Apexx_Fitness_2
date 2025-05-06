
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Sidebar from './components/Sidebar'

import Landing from './pages/Landing'
import Dashboard from './pages/admin/Dashboard'
import Analytics from './pages/admin/Analytics'
import Accounts from './pages/admin/Accounts'
import Attendance from './pages/admin/Attendance'
import Payments from './pages/admin/Payments'
import Settings from './pages/admin/Settings'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-black">{children}</div>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Landing />
                <Footer />
              </>
            }
          />

          <Route
            path="/dashboard"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/analytics"
            element={
              <AdminLayout>
                <Analytics />
              </AdminLayout>
            }
          />
          <Route
            path="/accounts"
            element={
              <AdminLayout>
                <Accounts />
              </AdminLayout>
            }
          />
          <Route
            path="/attendance"
            element={
              <AdminLayout>
                <Attendance />
              </AdminLayout>
            }
          />
          <Route
            path="/payments"
            element={
              <AdminLayout>
                <Payments />
              </AdminLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <AdminLayout>
                <Settings />
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
