import { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsLoggedIn, selectLoader, setLoginStatus } from "./authSlice"
import { AppLoader } from './components/layout/AppLoader'

//Utils
import PublicOnlyRoute from './components/utils/PublicOnlyRoute'
import PrivateRoute from './components/utils/PrivateRoute'

//screens
import AuthScreen from './components/screens/AuthScreen'
import BoardScreen from './components/screens/BoardScreen'

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loader = useSelector(selectLoader);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setLoginStatus(true));
      } else {
        dispatch(setLoginStatus(false));
      }
    });
    return () => unsub();
  }, [dispatch]);

  if (loader) return <AppLoader />

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicOnlyRoute component={AuthScreen} />} />
          <Route path='/boards' element={<PrivateRoute component={BoardScreen} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App
