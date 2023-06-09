import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Layout from './shared/layout/Layout';
import NotFound from './pages/notFound/NotFound';
import Announce from './pages/announce/Announce';

function App() {
  const routesDefinition = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/announce/:id" element={<Announce />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/notFound" element={<NotFound />}></Route>
      <Route path="/*" element={<Navigate to="/notFound" replace />}></Route>
    </Route>
  );
  const router = createBrowserRouter(routesDefinition);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
