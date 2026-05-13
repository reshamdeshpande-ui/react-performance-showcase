import { createRoot } from 'react-dom/client';
import {
  onCLS,
  onINP,
  onLCP,
} from 'web-vitals';
import App from './App.tsx';
import './index.css';
import './styles/globals.scss';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
)

onCLS(console.log);
onINP(console.log);
onLCP(console.log);