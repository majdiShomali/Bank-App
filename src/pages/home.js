import "./css/home.css";

const Home = (props) => {
  const initState55 = props.initState5;
  console.log(initState55.accounts[0].customerName);
  return (
    <>
      <div className="cardContainer">
      {initState55.accounts.map((account) => {
        return (
            
        <div className="card">
        <p>{account.customerName}</p>
        <p>{account.accountNumber}</p>
        <p>{account.accountType}</p>
        </div>
       
        );
      })}

</div>
    </>
  );
};

export default Home;
