import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter } from '../../actions/filters';
import { sortByAmount, sortByDate,  } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Shold generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
         type: 'SET_END_DATE',
         endDate: moment(0)
    });
});

test('Should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should generate set text filter object with text value', () => {
    const text = 'Something in'
    const action = setTextFilter(text);
   expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text
   });
});

test('Should generate default text filter action object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
  })
});