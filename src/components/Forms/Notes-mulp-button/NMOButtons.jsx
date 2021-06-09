import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Checkbox, Button, FormControlLabel, FormControl, Radio, TextareaAutosize } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NMOButtons = (props) =>{

        return(
            
                                <div className="row btnContainer flex-sm-row mt-4 mb-4">
                            <div className="mt-3 col-12 col-md-3 col-lg-2 p-0">
                                <Link to='/accounts'><Button type="submit" className="col-12">Notes</Button></Link>
                            </div>
                            <div className="mt-3 col-12 col-md-3 col-lg-2 align-self-center quitBtn">
                                <Button type="submit" className="col-12">Opt. Fields</Button>
                            </div>
                            <div className="mt-3 col-12 col-md-3 col-lg-2 align-self-center quitBtn pl-0">
                                <Link to='/accounts'><Button type="submit" className="col-12">Multiple Alias</Button></Link>
                            </div>
                        </div>
        )

}

export default NMOButtons;