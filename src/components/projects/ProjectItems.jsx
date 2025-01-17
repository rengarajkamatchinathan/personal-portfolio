import React, { useEffect } from 'react';
import { HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const ProjectItems = ({item}) => {
    const [toggleState, setToggleState] = useState(0);
    
    const[imageIndex,setImageIndex]=useState(0);
    const handleLeft=()=>{
        if(imageIndex==0){
            setImageIndex(item.images.length-1)
        }else{
            setImageIndex(imageIndex-1);
        }
    }
    const handleRight=()=>{
        if(imageIndex==item.images.length-1){
            setImageIndex(0)
        }else{
            setImageIndex(imageIndex+1);
        }
    }
    const toggleTab = (index) => {
        setToggleState(index);
    };
    console.log('IMAGE INDEX=',item.images)

    // Automatically call handleRight every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 4000); // 3000 ms = 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [imageIndex]); // Depend on imageIndex for seamless updates
  return (
    <>
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a  className="project__button" onClick={() => toggleTab(1)}>
                View <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>

        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">{item.title}</h3>
                        
                        {/* BANNER */}
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <div onClick={handleLeft} style={{cursor:'pointer'}} ><FaAngleLeft/></div>
                            <img className="project__img" src={item?.images[imageIndex]} alt="" />
                            <div onClick={handleRight} style={{cursor:'pointer'}}><FaAngleRight/></div>
                        </div>
                        <p className="project__modal-stack">
                            [{item.stack}]
                        </p>
                        {item.desc&&<p className="project__modal-description">
                            {item.desc}
                        </p>}
                        {
                            item.links.length>0&&<ul className="services__modal-services grid">
                            {
                             <div>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p>Source Code:</p>
                                    <p className="services__modal-info">
                                        <a href={item.links[0]}>{item.links[0]}</a>
                                    </p>
                                </li>
                                {
                                    item.links.length>1&&
                                    <li className="services__modal-service">
                                      <HiOutlineCheckCircle className="services__modal-icon" />
                                      <p>Live:</p>
                                       <p className="services__modal-info">
                                         <a href={item.links[1]}>{item.links[1]}</a>
                                        </p>
                                    </li>
                                }
                             </div>
                             
                            }
                         </ul>
                        }
                    </div>
                </div>

    </>
    );
}

export default ProjectItems;