import Header from './components/Header'
import Pages from './pages/indexPages'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Pages />
        <Footer />
      </div>
    </div>
  );
}
