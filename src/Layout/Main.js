import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Components/Container/Container';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container><Outlet></Outlet></Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;