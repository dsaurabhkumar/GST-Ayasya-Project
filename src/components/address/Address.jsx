import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';
import ErrorMsg from '../error-msg/ErrorMsg'
const Address = (props) =>{
    
    const accountAddInputText_address=[
        
        {
         label:'Address',
         address: [
             {name: 'id'},
             {name: 'addLine1'},        
             {name: 'addLine2'},
             {name: 'addLine3'},
             {name: 'addLine4'}
     ]
     }
     ]

     const validateField = value => {
        let error
        if(!value){
            error = 'Required'
        }
        return error
    }
    

    return(
        <>  
        <div div className="col-9">
            <label htmlFor='address'>Address</label>
        </div>          
            
                <div className="mb-3 col-9"> 
                    <Field
                        type='text'
                        name='address.addLine1'
                        // placeholder={placeholder}
                        as={TextField}
                        validate={validateField}
                    />
                    <ErrorMessage name='address.addLine1' component={ErrorMsg}/>
                    </div>
                <div className="mb-3 col-9">    
                <Field
                        type='text'
                        name='address.addLine2'
                        // placeholder={placeholder}
                        as={TextField}
                        validate={validateField}
                    />
                    <ErrorMessage name='address.addLine2' component={ErrorMsg}/>
                </div> 
                <div className="mb-3 col-9">    
                <Field
                        type='textarea'
                        name='address.addLine3'
                        // placeholder={placeholder}
                        as={TextField}
                        validate={validateField}
                    />
                    <ErrorMessage name='address.addLine3'/>
                 </div>
                <div className="mb-5 col-9">    
                <Field
                        type='textarea'
                        name='address.addLine4'
                        // placeholder={placeholder}
                        as={TextField}
                        validate={validateField}
                    />
                    <ErrorMessage name='address.addLine4'/>
                </div>
        </>

    )
             
}

export default Address