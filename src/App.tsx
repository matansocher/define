import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header, ScrollToTop } from '@components';
import { Home, Testimonials } from '@screens';
import '@styles/index.scss';
import '@styles/_colors.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='testimonials' element={<Testimonials />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
