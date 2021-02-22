import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from '@/Layout/ScrollToTop'
import Layout from '@/Layout/Layout'
function App() {
  return (
          <Router>
            <ScrollToTop>
              <Route  component={Layout} />
            </ScrollToTop>
          </Router>
  );
}
export default App