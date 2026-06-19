import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import PageNotFound from './lib/PageNotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Route-level code splitting: each page is loaded on demand to keep the
// initial bundle small.
const Home = lazy(() => import('@/pages/Home'));
const Rooms = lazy(() => import('@/pages/Rooms'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const About = lazy(() => import('@/pages/About'));
const Facilities = lazy(() => import('@/pages/Facilities'));
const Location = lazy(() => import('@/pages/Location'));
const Contact = lazy(() => import('@/pages/Contact'));
const Book = lazy(() => import('@/pages/Book'));
const FAQ = lazy(() => import('@/pages/FAQ'));

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/location" element={<Location />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
