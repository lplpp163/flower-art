import { Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import FlowersPage from '@/pages/FlowersPage';
import FlowerDetailPage from '@/pages/FlowerDetailPage';
import ArrangementsPage from '@/pages/ArrangementsPage';
import ArrangementDetailPage from '@/pages/ArrangementDetailPage';
import StructurePage from '@/pages/StructurePage';
import StructureDetailPage from '@/pages/StructureDetailPage';
import JournalPage from '@/pages/JournalPage';
import JournalPostPage from '@/pages/JournalPostPage';
import PracticePage from '@/pages/PracticePage';
import GrowthPage from '@/pages/GrowthPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flowers" element={<FlowersPage />} />
          <Route path="/flowers/:slug" element={<FlowerDetailPage />} />
          <Route path="/arrangements" element={<ArrangementsPage />} />
          <Route path="/arrangements/:slug" element={<ArrangementDetailPage />} />
          <Route path="/structure" element={<StructurePage />} />
          <Route path="/structure/:slug" element={<StructureDetailPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<JournalPostPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/growth" element={<GrowthPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
