import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home-page';
import { Details } from '../pages/details-page';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='details/:id' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}
export { Router } 