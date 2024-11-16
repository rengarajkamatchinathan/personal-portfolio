import React from 'react';
import { HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';
import { useState } from 'react';

const ProjectItems = ({item}) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
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
                        <p className="project__modal-stack">
                            [{item.stack}]
                        </p>
                        {item.desc&&<p className="project__modal-description">
                            {item.desc}
                        </p>}
                        {
                            item.links.length>0&&<ul className="services__modal-services grid">
                            {
                             item.links.map((i)=> <li className="services__modal-service">
                             <HiOutlineCheckCircle className="services__modal-icon" />
                             <p className="services__modal-info">
                                 <a href={i}>{i}</a>
                             </p>
                         </li>)
                            }
                         </ul>
                        }
                    </div>
                </div>

    </>
    );
}

export default ProjectItems;