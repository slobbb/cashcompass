import React from "react";
import '../App.css';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Presentation from '../components/Presentation';
import PictruesSlider from '../components/PicturesSlider';
export default function nonAuth(){
    return(
        <Layout>
            <Hero/>
            <Presentation/>
            <PictruesSlider/>
        </Layout>
    )
}