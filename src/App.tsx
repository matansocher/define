import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from '@components';
import { Home, Testimonials } from '@screens';
import '@styles/index.scss';
import '@styles/_colors.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='testimonials' element={<Testimonials />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
