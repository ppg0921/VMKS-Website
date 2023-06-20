import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./component/NavBar";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import Admin from './pages/Admin';
const Tools = lazy(() => import('./pages/Tools'))
const Tutorial = lazy(() => import('./pages/Tutorial'))


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Tools' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Tools />
          </Suspense>
        }
        />
        <Route path='Tutorial' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Tutorial />
          </Suspense>
        } />
        <Route path='Admin' element={<Admin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
