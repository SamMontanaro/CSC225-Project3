import React, { useState, useEffect } from "react";
import axios from 'axios';

function Employee(props) {

    const [employeeBasic, setEmployeeBasic] = useState(null);
    const [employeeFull, setEmployeeFull] = useState(null);
    const [employeeImg, setEmployeeImg] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(function(){
        getEmployee();
    }, []);

    function getEmployee() {
        setLoading(true);
        axios.get('https://statenweb.mockable.io/employee/' + props.id).then(function(response){
            const fetchedEmployee = response.data;
            setEmployeeBasic(<p>{fetchedEmployee.name} <br /> {"ID: " + fetchedEmployee.id} <br /> {"Department: " + fetchedEmployee.department} <br /></p>);
            setEmployeeFull(<p>{"ID: " + fetchedEmployee.id} <br /> {fetchedEmployee.name} <br /> {"Start Date: " + fetchedEmployee.startDate} <br /> {"Role: " + fetchedEmployee.role} <br /> {"Department: " + fetchedEmployee.department} <br /></p>);
            setEmployeeImg(<img className="card-img-top" src={fetchedEmployee.photo} alt={"Employee #" + fetchedEmployee.id}></img>);
            setLoading(false);
        });
    }

    return (
        <React.Fragment>
            {!!loading && <p>Loading...</p>}
            {!loading && 
                <div className="card col-3 p-2 mx-3 my-3 bg-dark">
                    {employeeImg}
                    <div className="card-body bg-light">
                        {employeeBasic}

                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        More Info
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {employeeFull}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </React.Fragment>
    );
}

export default Employee;