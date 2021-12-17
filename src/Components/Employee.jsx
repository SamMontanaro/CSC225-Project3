import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

function Employee(props) {

    const [employeeBasic, setEmployeeBasic] = useState(null);
    const [employeeFull, setEmployeeFull] = useState(null);
    const [employeeImg, setEmployeeImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [moreInfo, setMoreInfo] = useState(false);
    const [infoLevel, setInfoLevel] = useState(0);

    const upArrow = <FontAwesomeIcon icon={faCaretUp} />
    const downArrow = <FontAwesomeIcon icon={faCaretDown} />

    useEffect(function(){
        getEmployee();
    }, []);

    function getEmployee() {
        setLoading(true);
        axios.get('https://statenweb.mockable.io/employee/' + props.id).then(function(response){
            const fetchedEmployee = response.data;
            setEmployeeImg(<img className="card-img-top" src={fetchedEmployee.photo} alt={"Employee #" + fetchedEmployee.id}></img>);
            setEmployeeBasic(<p>{fetchedEmployee.name} <br /> {"ID: " + fetchedEmployee.id} <br /> {"Department: " + fetchedEmployee.department} <br /></p>);
            setEmployeeFull(<p>{fetchedEmployee.name} <br /> {"ID: " + fetchedEmployee.id} <br /> {"Department: " + fetchedEmployee.department} <br /> {"Start Date: " + fetchedEmployee.startDate} <br /> {"Role: " + fetchedEmployee.role} <br /></p>);
            setLoading(false);
        });
    }

    function swapInfoLevel() {
        if (infoLevel !== 1) {
            setInfoLevel(1);
            setMoreInfo(true);
        }
        else {
            setInfoLevel(0);
            setMoreInfo(false);
        }
    }

    return (
        <React.Fragment>
            {!!loading && 
                <div className="card col-3 p-1 mx-3 my-3 bg-dark">
                    <div className="card-body bg-light">
                        <p>Loading...</p>
                    </div>
                    <button type="button" className="btn btn-secondary" disabled>Loading...</button>
                </div>}
            {!loading && 
                <div className="card col-3 p-1 mx-3 my-3 bg-dark">
                    {employeeImg}
                    <div className="card-body bg-light">
                        {moreInfo ? employeeFull : employeeBasic}
                    </div>
                    <button onClick={() => {swapInfoLevel()}} type="button" className="btn btn-success">{infoLevel !== 1 ? <React.Fragment>Show More {downArrow}</React.Fragment> : <React.Fragment>Show Less {upArrow}</React.Fragment>}</button>
                </div>
            }
        </React.Fragment>
    );
}

export default Employee;