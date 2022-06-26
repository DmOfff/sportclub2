import './App.css';
import RouterConfig from "./navigation/RouterConfig";
import NavBar from "./components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
        <NavBar />
        <main className={'pt-[148px] sm:pt-[60px] w-full'}>
            <RouterConfig />
        </main>
        <ToastContainer />
    </div>
  );
}

export default App;
