import './App.css';
import RouterConfig from "./navigation/RouterConfig";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <div className="w-full h-screen flex flex-col">
        <NavBar />
        <main className={'pt-[60px] w-full pb-72'}>
            <RouterConfig />
        </main>
        <Footer />
    </div>
  );
}

export default App;
