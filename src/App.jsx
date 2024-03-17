import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import PrivateRoute from './components/Routes/PrivateRoute';
import RestrictedRoute from './components/Routes/RestrictedRoute';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
import { selectAuth } from './redux/auth/selectors';
import {refresh} from "./redux/auth/operations";


const HomePage = lazy(() => import('./pages/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LogInPage = lazy(() => import('./pages/LogInForm'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = selectAuth;
  const isRefreshing = useSelector(selectAuth);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LogInPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster />
    </div>
  );
};

export default App;