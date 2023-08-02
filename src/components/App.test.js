import { createRoot } from 'react-dom/client';
import App from './App';

describe('App', () => {
  it('앱이 정상적으로 로드된다.', () => {
    const div = document.createElement('div');
    createRoot(div).render(<App />);
  });
});
