import React, { useState } from "react";
import "./Section2.scss";
import Mantenimiento1 from "../../../assets/img/Mantenimiento1.jpeg";
import Mantenimiento2 from "../../../assets/img/Mantenimiento2.jpeg";
import Mantenimiento3 from "../../../assets/img/Mantenimiento3.jpeg";
import Mantenimiento4 from "../../../assets/img/Mantenimiento4.jpeg";
import Refrigeración from "../../../assets/img/Refrigeración.jpeg";
import Service1 from "../../../assets/img/Service1.jpeg";
import Service2 from "../../../assets/img/Service2.jpeg";
import Service3 from "../../../assets/img/Service3.jpeg";
import Service4 from "../../../assets/img/Service4.jpeg";
import Service5 from "../../../assets/img/Service5.jpeg";
import Service6 from "../../../assets/img/Service6.jpeg";
import { useLocation } from "react-router-dom";

export const Section2 = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const categories = [
    {
      categoryId: "1",
      categoryName: "Mantenimiento",
      categoryDescription: "Descripcion mantenimiento",
      img: Mantenimiento1,
    },
    {
      categoryId: "2",
      categoryName: "Refrigeración",
      categoryDescription: "Descripcion refrigeracion",
      img: Refrigeración,
    },
    {
      categoryId: "3",
      categoryName: "Cat3",
      categoryDescription: "Descripcion cat3",
      img: Mantenimiento2,
    },
    {
      categoryId: "4",
      categoryName: "Cat4",
      categoryDescription: "Descripcion cat4",
      img: Mantenimiento3,
    },
    {
      categoryId: "5",
      categoryName: "Cat5",
      categoryDescription: "Descripcion cat5",
      img: Mantenimiento4,
    },
  ];

  const services = [
    { serviceId: "1", categoryId: "1", serviceName: "Mantenimiento", photos: [Service1, Service2] },
    { serviceId: "2", categoryId: "2", serviceName: "Refrigeración", photos: [Service4, Service5, Service6] },
    { serviceId: "3", categoryId: "3", serviceName: "Service 3", photos: [Service3, Service2, Service1] },
    { serviceId: "4", categoryId: "4", serviceName: "Service 4", photos: [Service2, Service5] },
    { serviceId: "5", categoryId: "5", serviceName: "Service 5", photos: [Service3, Service1,Service4] },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId((prevCategoryId) => {
      // Si se hace clic en la misma categoría, deselecciona
      return prevCategoryId === categoryId ? null : categoryId;
    });
  };

  return (
    <div className="Section2">
      <div className="Cards">
        {categories.map((category) => {
          return (
            <div
              key={category.categoryId}
              className={`Card ${selectedCategoryId === category.categoryId ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.categoryId)}
            >
              <img
                src={category.img}
                alt={category.categoryName}
                className="ImgMantenimiento"
              ></img>
              <label className="title">{category.categoryName}</label>
              <label className="descripcion">
                {category.categoryDescription}
              </label>
            </div>
          );
        })}
      </div>
      <div className="Services">
        {services.map((service) => {
          if (selectedCategoryId === service.categoryId) {
            return (
              <div className="LateralBar" key={service.serviceId}>
                {service.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={service.serviceName}
                    className="Img"
                  ></img>
                ))}
                <label className="descripcion">{service.serviceName}</label>
              </div>
            );
          }
          return null; // No se muestra si no coincide la categoría seleccionada
        })}
      </div>
    </div>
  );


  {
    /* const [BarActive, SetBarActive] = useState(false);
    const ActiveBar = () => {
        console.log('funciona');
        const Bar = document.getElementById('LateralBar1')
        if (!BarActive){
            console.log("funciona x2");
            if(Bar){
                Bar.style.display='flex';
                SetBarActive((prevState)=>!prevState)
            }
        }else{
            Bar.style.display='none';
            SetBarActive((prevState)=>!prevState)
        }
        }
    const [BarActive2, SetBarActive2] = useState(false);
    const ActiveBar2 = () => {
        console.log('funciona');
        const Bar2 = document.getElementById('LateralBar2')
        if (!BarActive2){
            console.log("funciona x2");
            if(Bar2){
                Bar2.style.display='flex';
                SetBarActive2((prevState)=>!prevState)
            }
        }else{
            Bar2.style.display='none';
            SetBarActive2((prevState)=>!prevState)
        }
    }
    const location = useLocation();
    const shouldHide = location.pathname === '/contact';
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 
            <div class="Section2">
                <div class="Cards">
                    <div class="Card" onClick={ActiveBar}>
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArrxzmo_99wmHZOimxpCIMfNy9YEPbGhDUg&usqp=CAU" className='ImgMantenimiento'></img>
                        Mantenimiento
                    </div>
                    <div class="Card" onClick={ActiveBar2}>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/972/624/non_2x/cooling-control-icon-on-dark-vector.jpg" className='ImgRefrigeracion'></img>
                        Refrigeración
                    </div>
                </div>
                <div className='LateralBar' id='LateralBar1'>
                    <img src='https://static.vecteezy.com/system/resources/previews/015/769/380/non_2x/maintenance-icon-free-vector.jpg' className='Img'></img>
                    <img src = 'https://st2.depositphotos.com/1734074/6817/v/450/depositphotos_68174285-stock-illustration-repair-icon-vector-illustration.jpg' className='Img'></img>
                    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfe6Ay_AIsLJdYt73n0RxU7mMQL12afSmbw&usqp=CAU' className='Img'></img>
                    Mantenimiento
                </div>
                <div className='LateralBar' id='LateralBar2'>
                    <img src='https://img.freepik.com/vector-premium/reparacion-aires-acondicionados-mantenimiento-e-instalacion-sistemas-refrigeracion_88073-16.jpg' className='Img'></img>
                    <img src='https://media.istockphoto.com/id/1173760302/es/vector/vector-de-tecnolog%C3%ADa-de-energ%C3%ADa-de-refrigeraci%C3%B3n-del-aire-acondicionado.jpg?s=1024x1024&w=is&k=20&c=RVZvXsuM6zqnFGrDCtlWva-9AP0n7qDliPDYEnEquHU=' className='Img'></img>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPxVKaSZsT_6iIAvE-Es1Jjr64B5H0QoILA&usqp=CAU' className='Img'></img>
                    Refrigeración
                </div>
            </div>
        </div>
        
    ) */
  }
};
    