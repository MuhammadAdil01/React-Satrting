import React from 'react';
import ReactDOM from'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Cards from './cards';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent:'center' }}>
    <Cards image={"https://africanboutique.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-29-at-3.36.10-AM.jpeg"} name={"New Design"} price={"1150$"} ></Cards>
    <Cards image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFf0KCOAVisVvzWDqC6BpYpwQugZOUKG2ImjPLBO6D1CFq3EUxvT5TOSr_uM-lWmmPXQE&usqp=CAU"} name={"Advanced Limited"} price={"1.000$"}></Cards>
    <Cards image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX64FhXd7TIj18_Xeci47vq3fzS1JznWYG1Q&s"} name={"Arrival Stock"} price={"$155.99"}></Cards>
    <Cards image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowGcqa4v-NCdhIp7KCLbAS4b4Gpu_LRxcKQ&s"} name={"Public Demand"} price={"$120.77"}> </Cards>
    <Cards image={"https://siddiquesonsjewelry.com/cdn/shop/files/20240603_192642_0050.webp?v=1717428748"} name={"Diamond Reached"} price={"$15.78"}></Cards>
    <Cards image={"https://i.ebayimg.com/images/g/Lr0AAOSwBM5kN~PA/s-l1200.jpg"} name={"Diamond Rings"} price={"$13.99"} ></Cards>
    </div>
  </React.StrictMode>
);



