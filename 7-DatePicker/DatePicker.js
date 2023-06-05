import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import dateUtils from "utils/date";
import "./DatePicker.css";

const DatePicker = ({ onChange, startDate, endDate }) => {
  const { day: startDay, month, year } = dateUtils.separateDate(startDate);
  const { day: endDay } = dateUtils.separateDate(endDate);
  const modifiedMonth = dateUtils.convertMonthNumberToText(month);

  const dateInterval = `${startDay}-${endDay} ${modifiedMonth} ${year}`;

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    >
      <p className="selected_date_interval">{dateInterval}</p>
    </ReactDatePicker>
  );
};

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default DatePicker;
