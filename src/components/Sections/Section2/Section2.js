import React, { useState } from 'react'
import './Section2.scss';
import { useLocation } from 'react-router-dom';

export const Section2 = () => {
    const [BarActive, SetBarActive] = useState(false);
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
            {/* Contenido de Section1 */}
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
        
    )
}
