import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import SymbolContext from './context/SymbolContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
function App() {
    return (
        <div className='index'>
            <QueryClientProvider client={queryClient}>
                <SymbolContext>
                    <Navbar />
                    <Outlet />
                </SymbolContext>
            </QueryClientProvider>
        </div>
    );
}

export default App;
