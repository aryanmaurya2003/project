import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { CalendarToday, DateRange } from '@mui/icons-material';

export default function DateCalendarValue() {
  const [startValue, setStartValue] = React.useState(dayjs());
  const [endValue, setEndValue] = React.useState(dayjs().add(7, 'day'));

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto w-[800px] absolute z-50 right-[5px] top-[59px] ">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <DateRange className="text-blue-600" />
          Select Date Range
        </h2>
        <p className="text-gray-600 mt-1">Choose your start and end dates</p>
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex flex-col lg:flex-row gap-4 items-start justify-center">
          
          <div className="flex flex-col items-center">
            <div className="mb-2 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <CalendarToday className="text-gray-600 text-sm" />
                <h3 className="text-sm font-semibold text-gray-700">Start Date</h3>
              </div>
              <p className="text-xs text-gray-500">
                {startValue.format('MMM DD, YYYY')}
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-2 hover:border-gray-400 transition-colors">
              <DateCalendar 
                value={startValue} 
                onChange={(newValue) => setStartValue(newValue)}
                sx={{
                  width: 250,
                  height: 250,
                  '& .MuiPickersCalendarHeader-root': {
                    paddingLeft: 1,
                    paddingRight: 1,
                    minHeight: 40
                  },
                  '& .MuiDayCalendar-weekDayLabel': {
                    width: 32,
                    height: 32,
                    fontSize: '0.75rem'
                  },
                  '& .MuiPickersDay-root': {
                    width: 32,
                    height: 32,
                    fontSize: '0.75rem'
                  },
                  '& .MuiPickersDay-root.Mui-selected': {
                    backgroundColor: '#6b7280',
                    '&:hover': {
                      backgroundColor: '#4b5563'
                    }
                  }
                }}
              />
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center h-full pt-8">
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="bg-gray-100 rounded-full p-1 -my-1">
              <DateRange className="text-gray-600 text-sm" />
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <CalendarToday className="text-gray-600 text-sm" />
                <h3 className="text-sm font-semibold text-gray-700">End Date</h3>
              </div>
              <p className="text-xs text-gray-500">
                {endValue.format('MMM DD, YYYY')}
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-2 hover:border-gray-400 transition-colors">
              <DateCalendar 
                value={endValue} 
                onChange={(newValue) => setEndValue(newValue)}
                sx={{
                  width: 250,
                  height: 250,
                  '& .MuiPickersCalendarHeader-root': {
                    paddingLeft: 1,
                    paddingRight: 1,
                    minHeight: 40
                  },
                  '& .MuiDayCalendar-weekDayLabel': {
                    width: 32,
                    height: 32,
                    fontSize: '0.75rem'
                  },
                  '& .MuiPickersDay-root': {
                    width: 32,
                    height: 32,
                    fontSize: '0.75rem'
                  },
                  '& .MuiPickersDay-root.Mui-selected': {
                    backgroundColor: '#6b7280',
                    '&:hover': {
                      backgroundColor: '#4b5563'
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
}
