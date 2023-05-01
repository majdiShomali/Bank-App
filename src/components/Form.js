import { useState } from "react";
import "./css/form.css";

export default function MyForm() {
 

  const [customerName, setCustomerName] = useState("");
  

  const [accountNumber, setAccountNumber] = useState("");
  
  const [accountType, setAccountType] = useState("");

  
  const [count, setCount] = useState(3);
  const [array, setArray] = useState( [
    {
      count: 1,
      customerName:"Israa Othman",
      accountNumber: "123456",
      accountType: "Savings"
    },
    {
      count: 2,
      customerName:"Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts"
    }
]
)


  const handleSubmit = (event) => {
    event.preventDefault();
    

  let cards ={
    count:count,
    customerName:customerName,
    accountNumber:accountNumber,
    accountType:accountType
  }
  

    setArray([...array, cards])
    setCount(count+1)

     console.log(array)

  };

 







  return (

    <>

   
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>SignUP</legend>

  

        <div className="divP">
          <div className="LabelInput">
            <label>Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
         
        </div>

        <div className="divP">
          <div className="LabelInput">
            <label>Account Number:</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
        
        </div>

        <div className="divP">
          <div className="LabelInput">
            <label>Account Type</label>
            <input
              type="text"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            />
          </div>
          
        </div>

        <input type="submit" />
      </fieldset>
    </form>



   <div className="cardsContainer">
  
  { 
 
  


 
  array.map((account) => {
    
        return(

        <div id={account.count}  className="card">
          <p>{account.count}</p>
        <p>{account.customerName}</p>
        <p>{account.accountNumber}</p>
        <p>{account.accountType}</p>
        <button id={account.count}  >delete</button>
        </div>

        );
      })
      
      
      }



   </div>


    </>

  );
}
