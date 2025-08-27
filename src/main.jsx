import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { ThemeProvider } from './context/ThemeContext'; // ✅ Import ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>     {/* ✅ Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </Provider>
);
