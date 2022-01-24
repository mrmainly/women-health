import React, { useReducer, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DispatchContext, StateContext, LanguageContext, defaultStore } from './store'
import { stateReducer } from './reducer'

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

import BreastForm from './pages/profile/surveys/surveysDetail/Breast/breastWrapper'
import BreathForm from './pages/profile/surveys/surveysDetail/Breath/breathWrapper'
import CervixForm from './pages/profile/surveys/surveysDetail/Cervix/cervixWrapper'
import GutForm from './pages/profile/surveys/surveysDetail/Gut/gutWrapper'
import ProstateForm from './pages/profile/surveys/surveysDetail/Prostate/prostateWrapper'
import LiverForm from './pages/profile/surveys/surveysDetail/Liver/liverWrapper'

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgotPassword from './pages/auth/forgotPassword'

import FormProfile from './pages/profile/formProfile'
import Schedule from './pages/profile/schedule'
import Results from './pages/profile/results'
import Surveys from './pages/profile/surveys'

import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { Layout } from './components';
import { IntlProvider } from "react-intl";

const App = () => {
    const [state, dispatch] = useReducer(stateReducer, defaultStore)
    const [currentLocale, setCurrentLocale] = useState(LOCALES.RUSSIAN)

    const changeLocale = (localeCode: string) => {
        setCurrentLocale(localeCode)
    }

    return (
        <IntlProvider messages={messages[currentLocale]} defaultLocale={currentLocale} locale={LOCALES.RUSSIAN}>
            <LanguageContext.Provider value={{ currentLocale, changeLocale }}>
                <DispatchContext.Provider value={dispatch}>
                    <StateContext.Provider value={state}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<HomePage />} />
                                    <Route path="about" element={<AboutPage />} />
                                    <Route path="faq" element={<Faq />} />
                                    <Route path="contacts" element={<Contacts />} />

                                    <Route path="breast" element={<Breast />} />
                                    <Route path="breath" element={<Breath />} />
                                    <Route path="liver" element={<Liver />} />
                                    <Route path="gut" element={<Gut />} />
                                    <Route path="cervix" element={<Cervix />} />
                                    <Route path="prostate" element={<Prostate />} />

                                    <Route path="surveys/breast-survey" element={<BreastForm />} />
                                    <Route path="surveys/lung-survey" element={<BreathForm />} />
                                    <Route path="surveys/liver-survey" element={<LiverForm />} />
                                    <Route path="surveys/colon-survey" element={<GutForm />} />
                                    <Route path="surveys/cervix-survey" element={<CervixForm />} />
                                    <Route path="surveys/prostate-survey" element={<ProstateForm />} />

                                    <Route path="login" element={<Login />} />
                                    <Route path="register" element={<Register />} />
                                    <Route path="forgot" element={<ForgotPassword />} />

                                    <Route path="form-profile" element={<FormProfile />} />
                                    <Route path="schedule" element={<Schedule />} />
                                    <Route path="results" element={<Results />} />
                                    <Route path="surveys" element={<Surveys />} />
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </StateContext.Provider>
                </DispatchContext.Provider>
            </LanguageContext.Provider>
        </IntlProvider>
    );
}

export default App;
