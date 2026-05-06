// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { App as AdminApp, ModulesProvider } from "@M-M-Tech-House/jotam-autopartes-admin-ui"
import "@M-M-Tech-House/jotam-autopartes-admin-ui/style.css";

function App() {
  return (
    <ModulesProvider>
      <AdminApp config={{
        authHost: import.meta.env.VITE_AUTH_HOST,
        appUrl: import.meta.env.VITE_APP_URL,
        withCredentials: JSON.parse(import.meta.env.VITE_WITH_CREDENTIALS ?? 'false'),
        defaultCurrencyType: import.meta.env.VITE_DEFAULT_CURRENCY_TYPE,
        defaultCurrencyLocal: import.meta.env.VITE_DEFAULT_CURRENCY_LOCAL
      }} />
    </ModulesProvider>
  )
}

export default App
