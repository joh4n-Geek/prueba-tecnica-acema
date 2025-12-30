import './App.css'
import { AuthProvider } from './auth/context/AuthProvider'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <>
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    </>
  )
}

export default App;
