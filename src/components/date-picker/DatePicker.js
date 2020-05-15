import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext, Field } from 'formik';
import moment from 'moment'



const Datepicker = ({ name, value }) => {
    const { setFieldValue } = useFormikContext();
    // const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <Field
                as={DatePicker}
                type="date"
                className="form-control"
                name={name}
                selected={value}
                onChange={date => setFieldValue(name, date.toString('MM/dd/yyyy'))} />
        </div>
    );
};

export default Datepicker;