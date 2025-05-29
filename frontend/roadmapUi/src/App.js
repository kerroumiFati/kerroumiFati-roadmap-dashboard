
import Header from './components/Header';
import Roadmap from './components/Roadmap';
import ThemeToggle from './components/ThemeToggle';
import './index.css';
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
      <ThemeToggle />
      <Header />
      <Roadmap />
    </div>
  );
}

export default App;
