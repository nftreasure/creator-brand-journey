/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';

import Layout from './components/layout';
import Home from './pages/home';
import CreativePhases from './pages/creative-phases';
import CreatorBrandDevelopment from './pages/creator-brand-development';
import CreatorBrandEmodied from './pages/creator-brand-embodied';
import CreatorBrandCommunity from './pages/creator-brand-community';
import CreatorBrandRecognition from './pages/creator-brand-recognition';
import CreatorBrandOutcomes from './pages/creator-brand-outcomes';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router base="/creator-brand-journey" root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/creative-phases" component={CreativePhases} />
      <Route path="/brand-development" component={CreatorBrandDevelopment} />
      <Route path="/embodiment" component={CreatorBrandEmodied} />
      <Route path="/community-transformation" component={CreatorBrandCommunity} />
      <Route path="/brand-recognition" component={CreatorBrandRecognition} />
      <Route path="/traction-outcomes" component={CreatorBrandOutcomes} />
  </Router>
), root!);