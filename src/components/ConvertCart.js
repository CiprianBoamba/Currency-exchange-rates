import React, { useState } from "react";

const ConvertCart = () => {
  const [initialAmount, setInitialAmount] = useState("");
  const [initialCurrencyFrom, setInitialCurrencyFrom] = useState("");
  const [initialCurrencyTo, setInitialCurrencyTo] = useState("");

  const amountHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setInitialAmount(event.target.value);
  };

  const currencyFromHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setInitialCurrencyFrom(event.target.value);
  };
  const currencyToHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setInitialCurrencyTo(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      amount: initialAmount,
      from: initialCurrencyFrom,
      to: initialCurrencyTo,
    };
    console.log(enteredData);
    setInitialAmount("");
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor="currencyAmount">Amount</label>
        <input
          type="number"
          name="currencyAmount"
          id="Amount"
          min="1"
          onChange={amountHandler}
          value={initialAmount}
        />
        <label htmlFor="currencyFrom">From</label>
        <select
          name="currencyFrom"
          id="from"
          onChange={currencyFromHandler}
          value={initialCurrencyFrom}
        >
          <option value=""></option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="YEN">YEN</option>
        </select>
        <label htmlFor="currencyTo">To</label>
        <select
          name="currencyTo"
          id="to"
          onChange={currencyToHandler}
          value={initialCurrencyTo}
        >
          <option value="">Choose</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="YEN">YEN</option>
        </select>
        <button type="submit">Convert</button>
        {/* {!initialAmount && <p>Please entered a valid amount (more than 1).</p>} */}
      </form>
    </div>
  );
};

export default ConvertCart;
