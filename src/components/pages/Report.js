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
    const [isNotSubmitted, setSubmit] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');

    const jsonData = [
        {
            "description": "Victim sustained a gunshot wound to the leg.",
            "crime_type": "Assault"
        },
        {
            "description": "The victim was punched in the face and suffered a broken nose.",
            "crime_type": "Assault"
        },
        {
            "description": "A knife was used to inflict stab wounds on the victim's back.",
            "crime_type": "Attempted Homicide"
        },
        {
            "description": "Intentionally causing physical harm or injury to another person",
            "crime_type": "Assault"
        },
        {
            "description": "Taking someone's property by force or threat of force usually in the presence of the victim",
            "crime_type": "Robbery"
        },
        {
            "description": "Illegally entering a building or premises with the intent to commit theft or another felony",
            "crime_type": "Burglary"
        },
        {
            "description": "Abducting or restraining someone against their will often for ransom or other unlawful purposes",
            "crime_type": "Kidnapping"
        },
        {
            "description": "The unlawful killing of another person which can be classified as murder manslaughter or justifiable homicide",
            "crime_type": "Homicide"
        },
        {
            "description": "Acts of violence or abuse within a domestic setting typically involving intimate partners or family members",
            "crime_type": "Domestic Violence"
        },
        {
            "description": "Criminal activities conducted over the internet such as hacking identity theft and online scams",
            "crime_type": "Cybercrime"
        },
        {
            "description": "Illegally manufacturing distributing selling or transporting controlled substances",
            "crime_type": "Drug Trafficking"
        },
        {
            "description": "Stealing someone else's property without their permission",
            "crime_type": "Theft"
        },
        {
            "description": "Deceptive practices to gain something of value such as financial fraud identity theft or insurance fraud",
            "crime_type": "Fraud"
        },
        {
            "description": "Non-consensual sexual contact or behavior including rape and other forms of sexual violence",
            "crime_type": "Sexual Assault"
        },
        {
            "description": "Intentionally setting fire to property or structures",
            "crime_type": "Arson"
        },
        {
            "description": "Deliberate destruction or damage to property often without theft involved",
            "crime_type": "Vandalism"
        },
        {
            "description": "A criminal act committed against an individual or group based on their race religion ethnicity or other protected characteristics",
            "crime_type": "Hate Crime"
        },
        {
            "description": "The illegal trade of people often for forced labor sexual exploitation or slavery-like practices",
            "crime_type": "Human Trafficking"
        },
        {
            "description": "Forcibly stealing a vehicle from its driver",
            "crime_type": "Carjacking"
        },
        {
            "description": "Concealing the origins of illegally obtained money by means of various transactions",
            "crime_type": "Money Laundering"
        },
        {
            "description": "Acts of violence or intimidation aimed at causing fear and disrupting societal order for political or ideological purposes",
            "crime_type": "Terrorism"
        },
        {
            "description": "Non-violent crimes committed for financial gain by individuals in business or professional positions",
            "crime_type": "White-Collar Crime"
        },
        {
            "description": "Repeatedly harassing or following someone causing them fear or emotional distress",
            "crime_type": "Stalking"
        },
        {
            "description": "The victim fell and suffered a head injury.",
            "crime_type": "Accidental Injury"
        },
        {
            "description": "Victim's hand was cut with a sharp object.",
            "crime_type": "Assault"
        },
        {
            "description": "The victim was hit by a car and sustained multiple fractures.",
            "crime_type": "Accidental Injury"
        },
        {
            "description": "A baseball bat was used to assault the victim.",
            "crime_type": "Assault"
        },
        {
            "description": "The victim was poisoned and experienced severe symptoms.",
            "crime_type": "Poisoning"
        },
        {
            "description": "The victim was bitten by a dog and suffered deep lacerations.",
            "crime_type": "Animal Attack"
        },
        {
            "description": "The victim was shot in the chest and died.",
            "crime_type": "Homicide"
        },
        {
            "description": "The victim's house was robbed and valuables were stolen.",
            "crime_type": "Robbery"
        },
        {
            "description": "A group of individuals kidnapped the victim for ransom.",
            "crime_type": "Kidnapping"
        },
        {
            "description": "An arson attack resulted in damage to the victim's property.",
            "crime_type": "Arson"
        },
        {
            "description": "The victim was poisoned with a toxic substance.",
            "crime_type": "Poisoning"
        },
        {
            "description": "A stray dog attacked the victim causing injuries.",
            "crime_type": "Animal Attack"
        },
        {
            "description": "The victim tripped and broke their arm.",
            "crime_type": "Accidental Injury"
        },
        {
            "description": "The victim was stabbed in a robbery attempt.",
            "crime_type": "Robbery"
        },
        {
            "description": "A car accident caused injuries to the victim.",
            "crime_type": "Accidental Injury"
        }

    ]
        ;


    const handleInputChange = (event, fieldName) => {
        const { value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
        const matchedDescription = jsonData.find(
            (item) => item.description === formData.incidentType
        );

        if (matchedDescription) {
            setAlertMessage(`Possible reason for injury is: ${matchedDescription.crime_type}`);

            // Clear the alert after a certain period of time (e.g., 5 seconds)
            setTimeout(() => {
                setAlertMessage('');
            }, 5000);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit(false)

        const alertElement = document.createElement('div');
        alertElement.className = 'alert';
        alertElement.textContent = 'Thank you for reporting.We appreaciate your Valor!';

        // Append the alert element to a suitable container (e.g., the form)
        const form = document.querySelector('form');
        form.appendChild(alertElement);

        // Remove the alert after a certain period of time (e.g., 5 seconds)
        setTimeout(() => {
            form.removeChild(alertElement);
        }, 5000);
        // Here you can perform form submission logic using formData
        console.log(formData);


        // Check if the entered incidentType matches any description from the JSON data

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
                                    {alertMessage && <div className="alert">{alertMessage}</div>}
                                    <div className="form-group" id="info">
                                        <h1>Personal Information</h1>
                                        <Input
                                            label="Full Name"
                                            type="text"
                                            className="form-control"
                                            id="fullName"
                                            name="fullName"

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



                                    {isNotSubmitted &&
                                        <div className="text-right">
                                            <button type="submit" className="toggle-buttons" >
                                                Submit
                                            </button>
                                        </div>
                                    }

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
