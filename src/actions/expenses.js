import uuid from 'uuid';
import EditExpensePage from '../components/EditExpensePage';
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

       
//  Expense removal chalenge !

// 1. Create startRemoveExpense (same call signature as removeExpense)
// 2.Test startRemoveExpense with "should remove expenses from firebase"
// 3. Use startRemoveExpense in EditExpensePage instead of removeExpense
// 4. Adjust editExpensePage tests




//REMOVE_EXPENSE
 export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};    

 //  Expense removal chalenge !

// 1. Create startEditExpense (same call signature as removeExpense)
// 2.Test startEditExpense with "should edit expenses from firebase"
// 3. Use startEditExpense in EditExpensePage instead of editExpense
// 4. Adjust editExpensePage tests


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE', 
  id,
  updates
});

export const startEditExpense = ( id, updates) => {
  return (dispatch) => {
   return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};



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


 