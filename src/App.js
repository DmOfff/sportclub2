import './App.css';
import RouterConfig from "./navigation/RouterConfig";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col">
        <NavBar />
        <main className={'pt-[148px] sm:pt-[60px] w-full '}>
            <RouterConfig />
        </main>
    </div>
  );
}

export default App;
