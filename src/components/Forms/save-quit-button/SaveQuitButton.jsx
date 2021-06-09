import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';
import { Link } from 'react-router-dom';

                  const SaveQuitButton = (props) =>{

                    return(      
                    <div className="row col-12 btnContainer flex-sm-row-reverse mt-4 mb-5">
                        <div className="mt-3 col-sm-6 col-md-2 p-0">
                            <Button type="submit" className="col-12" disabled={props.isSubmitting}>Save</Button>
                        </div>
                        <div className="mt-3 col-sm-6 col-md-2 align-self-center quitBtn">
                            <Link to='/'><Button type="submit" className="col-12" color="primary" variant="outlined">Quit</Button></Link>
                        </div>
                    </div>
                    )
                  }
export default SaveQuitButton