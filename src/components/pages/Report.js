import React, { useState } from 'react';
import './Report.css'; // Import your CSS file
import Input from '../Input/Input';
import Select from '../Select/Select';

const ReportForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        relationship: '',
        address: '',
        communicationMethod: '',
        incidentType: '',
        contactTime: '',
        comment: '',
    });

    const handleInputChange = (event, fieldName) => {
        const { value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform form submission logic using formData
        console.log(formData);
    };
    const relationshipOptions = [
        { value: "victim", label: "Victim" },
        { value: "reporter", label: "Reporter" },
        { value: "civilService", label: "Service Worker" }
    ]

    const communicationOptions = [
        { value: "call", label: "Call" },
        { value: "email", label: "Email" },
        { value: "sms", label: "SMS" },
    ]

    return (
        <section>
            <div className="container max-width-large">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="">
                            <div className="card-header header">
                                <h1 className="logo" >Report Form</h1>
                            </div>

                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group" id="info">
                                        <h1>Personal Information</h1>
                                        <Input
                                            label="Full Name"
                                            type="text"
                                            className="form-control"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => handleInputChange(e, 'fullName')}
                                        />
                                    </div>


                                    <div className="form-group" id="info">
                                        <h1>Relationship</h1>
                                        <Select
                                            id="relationship"
                                            label="I am the : "
                                            value={formData.relationship}
                                            onChange={(e) => handleInputChange(e, 'relationship')}
                                            options={relationshipOptions}
                                        />
                                    </div>

                                    <div className="form-group" id="info">

                                        <Select
                                            onChange={(e) => handleInputChange(e, 'communicationMethod')}
                                            className="form-control"
                                            id="communicationMethod"
                                            name="relationship"
                                            required
                                            value={formData.communicationMethod}
                                            label="Preferred method of communication : "
                                            options={communicationOptions}
                                        />

                                    </div>
                                    <div className="form-group" id="info">
                                        <Input
                                            label="Description"
                                            type="text"
                                            className="form-control"
                                            id="incidentType"
                                            name="incidentType"
                                            required
                                            value={formData.incidentType}
                                            onChange={(e) => handleInputChange(e, 'incidentType')}
                                        />


                                    </div>
                                    <div className="form-group" id="info">

                                        <Input
                                            label="When can we contact you?"
                                            type="text"
                                            className="form-control"
                                            id="contactTime"
                                            name="contactTime"
                                            required
                                            value={formData.contactTime}
                                            onChange={(e) => handleInputChange(e, 'contactTime')}
                                        />

                                    </div>
                                    <div className="form-group" id="info">
                                        <Input
                                            label="Comment"
                                            type="text"
                                            className="form-control"
                                            id="comment"
                                            name="comment"
                                            rows="4"
                                            required
                                            value={formData.comment}
                                            onChange={(e) => handleInputChange(e, 'comment')}
                                        />

                                    </div>



                                    <div className="text-right">
                                        <button type="submit" className="toggle-buttons" >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportForm;
