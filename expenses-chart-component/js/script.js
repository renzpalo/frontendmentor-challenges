const chartContainer = document.querySelector('.expenses-chart__chart');

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const todaysDay = days[new Date().getDay() - 1];

// Get the local JSON file
async function getExpenses() {
  try {
    const result = await fetch('data.json');

    const data = await result.json();

    generateExpenses(data);

    return data;
  } catch(e) {
    console.log(e);
  }
}

const generateExpenses = (expenses) => {
  let expensesHTML = '';
  let activeDay = '';
  let highestExpense = getHighestExpense(expenses);
  let expensePercentage = 0;

  expenses.forEach(expense => {
    activeDay = todaysDay == expense.day ? ' chart-bar__active' : '';

    // Get the percentage of the expense amount by highest expense.
    expensePercentage = (expense.amount / highestExpense) * 100;

    expensesHTML +=   `<div class="chart-bar__day${activeDay}">
                        <div class="chart-bar">
                          <div class="chart-bar__fill" style="height: ${expensePercentage}%">
                            <div class="chart-bar__fill__amount">
                              <p>$${expense.amount}</p>
                            </div>
                          </div>
                        </div>
                        <small>${expense.day}</small>
                      </div>`;
  });

  chartContainer.innerHTML = expensesHTML;
};

// Get the highest expense amount
const getHighestExpense = (expenses) => {
  let highestExpense = 0;
  
  expenses.forEach(expense => {
    if(expense.amount > highestExpense) {
      highestExpense = expense.amount;
    }
  });

  return highestExpense;
};

getExpenses();