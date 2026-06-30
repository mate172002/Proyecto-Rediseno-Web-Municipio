import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { MunicipalityPage } from './pages/MunicipalityPage';
import { CityPage } from './pages/CityPage';
import { NewsPage } from './pages/NewsPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="servicios/:id" element={<ServiceDetailPage />} />
          <Route path="municipio" element={<MunicipalityPage />} />
          <Route path="ciudad" element={<CityPage />} />
          <Route path="noticias" element={<NewsPage />} />
          <Route path="transparencia" element={<TransparencyPage />} />
          <Route path="contacto" element={<ContactPage />} />
          {/* Catch all route can go here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
