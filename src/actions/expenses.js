import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../reducers/expenses';



//ADD_EXPENSE
export const addExpense = (expense)  => ({
            type: 'ADD_EXPENSE',
            expense
        });


        export const startAddExpense = (expenseData = {}) => {
          return (dispatch) => {
            const {
              description = '',
              note = '',
              amount = 0,
              createdAt = 0
         } = expenseData;
         const expense = { description, note, amount,createdAt };

         return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
              id: ref.key,
              ...expense
            }));
          }); 
        };
       };

       


//REMOVE_EXPENSE
 export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE', 
  id,
  updates
});

//SET_EXPENSES

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});


// Exersise---->

 //1.Fetch all expense data once
//  2. Parse the data into an Array
//  3. Dispatch SET_EXPENSES


 export const startSetExpenses = () => {
  return (dispatch) => { 
   return database.ref('expenses').once('value')
    .then((snapshot) => {
       const expenses = [];
      

       // 2.
       snapshot.forEach((childSnapshot) => {
        expenses.push({    //----> pushing the items into expenses array
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
       });

           // 3.
       dispatch(setExpenses(expenses));
        });
      };
    }; // asinchronous action


 