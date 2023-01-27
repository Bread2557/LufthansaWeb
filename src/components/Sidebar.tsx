import React, {useState} from "react";


export const Sidebar: React.FC = props => {

    const [selectedMenu, setSelectedMenu] = useState(0);

    /*aria-current="page"*/
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
                 style={{width: "280px", height: "100vh"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" style={{margin: "0 auto"}}>
                    <span className="fs-4 d-flex">Damage<b style={{color: "#FFAD00"}}>AI</b></span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className={getStyleForMenuPoint(0)}  onClick={() => setSelectedMenu(0)}>
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#home"/>
                            </svg>
                            Schaden reklamieren
                        </a>
                    </li>
                    <li>
                        <a href="#" className={getStyleForMenuPoint(1)} onClick={() => setSelectedMenu(1)}>
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#speedometer2"/>
                            </svg>
                            Reklamationsverlauf
                        </a>
                    </li>
                    <li>
                        <a href="#" className={getStyleForMenuPoint(2)} onClick={() => setSelectedMenu(2)}>
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#table"/>
                            </svg>
                            Info
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="#"
                       className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                       id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                             className="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow"
                        aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    );

    function getStyleForMenuPoint(index: number) {
        if(index === selectedMenu) {
            return "nav-link active";
        } else {
            return "nav-link text-white";
        }
    }

}