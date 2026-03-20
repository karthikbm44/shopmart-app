import React, { useState } from "react";

function Contact(){
    //storre form data
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""

    })

    //track form sumbmission
    const [submitted,setSubmitted] = useState(false);

    //handle input changes dynamically
    const handleChange = (e)=>{
        const {name,value} = e.target;
        
        setFormData({
            ...formData,
            [name]:value
        });
    }

    //handlr form submission
    const handleSubmit =(e)  => {
        e.preventDefault();
        console.log("Form submitted : ", formData);
        setSubmitted(true);

        
    //reset form after submission
        setFormData({ name:"",
        email:"",
        message:""});
    };

    return(
        <div>
            <h2>Contact Us</h2>
            { !submitted ? (
                <form onSubmit={handleSubmit} style={styles.form} >
                    <label>Name :  
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />            
                    </label>
                    
                    <label>Email :  
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />                        
                    </label>
                    
                    <label>Message :  
                        <input type="text" name="message" value={formData.message} onChange={handleChange} />
                    </label>
                   

                    <button type="submit">Submit</button>
                </form>
            ):(
                <p>Thank you for contacting us! We'll get back to you soon.</p>
            )

            }
        </div>
    );
}

const styles = {
    form: {
        display :"flex",
        flexDirection: "column",
        gap:"12px",
        maxWidth:"400px",
        minWidth:"20px"
    }
};

export default Contact;