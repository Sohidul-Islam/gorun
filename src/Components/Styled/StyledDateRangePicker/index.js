// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import _ from 'lodash';
// import React, { useState } from 'react';
// import { DateRangePicker } from 'react-dates';
// import DatePresets from './Presets';

// // eslint-disable-next-line no-unused-vars
// export default function StyledDateRangePicker({ startDate, endDate, onChange }) {
//   const [focusedInput, setFocusedInput] = useState(null);

//   return (
//     <DateRangePicker
//       startDate={startDate}
//       endDate={endDate}
//       startDateId={_.uniqueId('start_date_id')}
//       endDateId={_.uniqueId('end_date_id')}
//       onDatesChange={onChange}
//       focusedInput={focusedInput}
//       onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
//       noBorder
//       date
//       customArrowIcon="-"
//       showDefaultInputIcon
//       inputIconPosition="after"
//       customInputIcon={<ExpandMoreIcon />}
//       hideKeyboardShortcutsPanel
//       keepOpenOnDateSelect
//       isOutsideRange={() => false}
//       renderCalendarInfo={() => <DatePresets endDate={endDate} startDate={startDate} onChange={onChange} />}
//     />
//   );
// }
