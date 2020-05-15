import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


 
const Datepicker = (name) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <DatePicker 
            className="form-control"
            name={name}
            selected={startDate} 
            onChange={date => setStartDate(date)} />
        </div>
    );
};

export default Datepicker;