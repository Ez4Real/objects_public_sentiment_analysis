import './App.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import CategoryContainer from './components/ui/CategoryContainer/CategoryContainer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <CategoryContainer></CategoryContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
