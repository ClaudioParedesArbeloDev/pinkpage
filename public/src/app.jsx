import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home/home';
import Terms from './pages/terms/terms';
import Policies from './pages/privacy_policies/privacy_policies';
import Faq from './pages/faq/faq'

import './app.css';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/terms' element={<Terms/>} />
                    <Route path='/policies' element={<Policies/>} />
                    <Route path='/faq' element={<Faq/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
