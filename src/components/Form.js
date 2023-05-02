import { useState } from "react";
import "./css/form.css";

function Form() {
  const [accounts, setaccounts] = useState({
    accountss: [
      {
        id: 1,
        customerName: "Israa Othman",
        accountNumber: "123456",
        accountType: "Savings",
      },
      {
        id: 2,
        customerName: "Ahmad Zahran",
        accountNumber: "987654",
        accountType: "Student accounts",
      },
    ],
    numberOfAccounts: 2,
  });

  function handleSubmit(event) {
    event.preventDefault();
    let customerName = event.target.CustomerName.value;
    let accountNumber = event.target.AccountNumber.value;
    let accountType = event.target.select.value;

    setaccounts((prevAccounts) => {
      const newAccount = {
        id: prevAccounts.accountss.length + 1,
        customerName: customerName,
        accountNumber: accountNumber,
        accountType: accountType,
      };
      return {
        accountss: [...prevAccounts.accountss, newAccount],
        numberOfAccounts: prevAccounts.numberOfAccounts + 1,
      };
    });
  }

  function removeAccount(id) {
    setaccounts((prevAccounts) => {
      const newAccounts = prevAccounts.accountss.filter(
        (account) => account.id !== id
      );
      return {
        accountss: newAccounts,
        numberOfAccounts: prevAccounts.numberOfAccounts - 1,
      };
    });
  }




  return (
    <>
      {/*------------------ form --------------------------*/}

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="CustomerName">Customer Name</label>
        <input type="text" name="CustomerName" />

        <label htmlFor="">Account Number </label>
        <input type="text" name="AccountNumber" />

        <label htmlFor="">Account Type</label>
        <select name="select">
          <option>Current account</option>
          <option>Savings</option>
          <option>Student accounts</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {/*------------------ form --------------------------*/}

      {/*------------------ number Of Accounts --------------------------*/}
      <div className="numOfAcc">
        The total number of account in bank{" "}
        <strong>{accounts.numberOfAccounts}</strong>
      </div>
      {/*------------------ number Of Accounts --------------------------*/}

      {/*------------------ Accounts card --------------------------*/}
      <div className="cardsContainer">
        {accounts.accountss.map((value) => {
          return (
            <>
              <div className="card">
                <h3>Name: {value.customerName}</h3>
                <p>id: {value.id}</p>
                <p>Account Number: {value.accountNumber}</p>
                <p>Account Type: {value.accountType}</p>
                <button onClick={() => removeAccount(value.id)}>Delete account</button>
              </div>
            </>
          );
        })}
      </div>
      {/*------------------ Accounts card --------------------------*/}
    </>
  );
}

export default Form;