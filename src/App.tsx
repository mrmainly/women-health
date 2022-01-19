import React, {useReducer} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Route, BrowserRouter, Routes} from "react-router-dom";
import {DispatchContext, StateContext, defaultStore} from './store'
import {stateReducer} from './reducer'

import HomePage from './pages/home';
import AboutPage from './pages/about'
import Faq from './pages/faq'
import Contacts from './pages/contacts'

import Breast from './pages/surveysInfo/breast'
import Breath from './pages/surveysInfo/breath'
import Liver from './pages/surveysInfo/liver'
import Gut from './pages/surveysInfo/gut'
import Cervix from './pages/surveysInfo/cervix'
import Prostate from './pages/surveysInfo/prostate'

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgotPassword from './pages/auth/forgotPassword'

import FormProfile from './pages/profile/formProfile'
import Schedule from './pages/profile/schedule'
import Results from './pages/profile/results'
import Surveys from './pages/profile/surveys'

import {Layout} from './components';
import {IntlProvider} from "react-intl";

const App = () => {
    const [state, dispatch] = useReducer(stateReducer, defaultStore)
    return (
        <IntlProvider messages={{}} defaultLocale={'ru'} locale={'ru'}>
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout/>}>
                                <Route index element={<HomePage/>}/>
                                <Route path="about" element={<AboutPage/>}/>
                                <Route path="faq" element={<Faq/>}/>
                                <Route path="contacts" element={<Contacts/>}/>

                                <Route path="breast" element={<Breast/>}/>
                                <Route path="breath" element={<Breath/>}/>
                                <Route path="liver" element={<Liver/>}/>
                                <Route path="gut" element={<Gut/>}/>
                                <Route path="cervix" element={<Cervix/>}/>
                                <Route path="prostate" element={<Prostate/>}/>

                                <Route path="login" element={<Login/>}/>
                                <Route path="register" element={<Register/>}/>
                                <Route path="forgot" element={<ForgotPassword/>}/>

                                <Route path="form-profile" element={<FormProfile/>}/>
                                <Route path="schedule" element={<Schedule/>}/>
                                <Route path="results" element={<Results/>}/>
                                <Route path="surveys" element={<Surveys/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </StateContext.Provider>
            </DispatchContext.Provider>
        </IntlProvider>
    );
}

export default App;
