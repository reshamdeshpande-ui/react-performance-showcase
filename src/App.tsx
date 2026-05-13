import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Dashboard from './pages/Dashboard';

import CodeSplittingDemo from './modules/code-splitting/CodeSplittingDemo';
import RerenderDemo from './modules/rerenders/RerenderDemo';
import VirtualizationDemo from './modules/virtualization/VirtualizationDemo';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/rerenders"
            element={<RerenderDemo />}
          />

          <Route
            path="/virtualization"
            element={<VirtualizationDemo />}
          />

          <Route
            path="/code-splitting"
            element={<CodeSplittingDemo />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}