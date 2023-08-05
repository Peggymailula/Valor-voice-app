import React, { useState } from 'react';
import './Report.css'; // Import your CSS file

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform form submission logic using formData
        console.log(formData);
    };

    return (
        <section>
            <div className="container max-width-large">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card content">
                            <div className="card-header header">
                                <h1 className="logo" style={{ color: '#000000' }}>Report Form</h1>
                            </div>

                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group" id="info">
                                        <h1>Personal Information</h1>
                                        <label htmlFor="fullName">Full Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group" id="info">
                                        <h1>Relationship</h1>
                                        <label htmlFor="relationship">I am the:</label>
                                        <select
                                            className="form-control"

                                            id="relationship"
                                            name="relationship"
                                            required
                                            value={formData.relationship}
                                            onChange={handleInputChange}
                                        >
                                            <option value="victim">Victim</option>
                                            <option value="reporter">Reporter</option>
                                            <option value="civilService">Civil Service Worker</option>
                                        </select>
                                    </div>
                                    <div className="form-group" id="info">
                                        <label htmlFor="communicationMethod">Preferred method of communication:</label>
                                        <select
                                            className="form-control"
                                            id="communicationMethod"
                                            name="communicationMethod"
                                            required
                                            value={formData.communicationMethod}
                                            onChange={handleInputChange}
                                        >
                                            <option value="email">Email</option>
                                            <option value="phone">Phone</option>
                                            <option value="mail">Mail</option>
                                        </select>
                                    </div>
                                    <div className="form-group" id="info">
                                        <label htmlFor="incidentType">Incident Type:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="incidentType"
                                            name="incidentType"
                                            required
                                            value={formData.incidentType}
                                            onChange={handleInputChange}
                                        />

                                    </div>
                                    <div className="form-group" id="info">
                                        <label htmlFor="contactTime">When can we contact you?</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contactTime"
                                            name="contactTime"
                                            required
                                            value={formData.contactTime}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group" id="info">

                                        <label htmlFor="comment">Comment:</label>
                                        <textarea
                                            className="form-control"
                                            id="comment"
                                            name="comment"
                                            rows="4"
                                            required
                                            value={formData.comment}
                                            onChange={handleInputChange}
                                        />

                                    </div>



                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
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
