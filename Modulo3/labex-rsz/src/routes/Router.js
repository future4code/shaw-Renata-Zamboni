import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {HomePage} from '../pages/HomePage';

import {ListTripsPage} from '../pages/ListTripsPage';
import {ApplicationFormPage} from '../pages/ApplicationFormPage';

import {LoginPage} from '../pages/LoginPage';
import {AdminHomePage} from '../pages/AdminHomePage';
import {CreateTripPage} from '../pages/CreateTripPage';
import {TripDetailsPage} from '../pages/TripDetailsPage';


export const Router=()=>{
    return(

        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage/>}/>


                <Route path="lista-viagem" element={<ListTripsPage/>}/>
                <Route path="form" element={<ApplicationFormPage/>}/>


                <Route path="login" element={<LoginPage/>}/>            
                <Route path="admin" element={<AdminHomePage/>}/>
                <Route path="cria-viagem" element={<CreateTripPage/>}/>
                <Route path="detalhe-viagem" element={<TripDetailsPage/>}/>

            </Routes>        
        </BrowserRouter>

    )
}