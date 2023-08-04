import React from "react";
import styles from "./loanRequest.module.css";
import Button from "../Button/Button";

const LoanRequestForm = ({ handleChange, payloadData, handleSubmit }) => {
  return (
    <form className={styles.form} onSubmit={(e)=> handleSubmit(e)}>
      <span className={styles.input}>
        <label htmlFor="name">Full name</label>
        <input
          value={payloadData.full_name}
          type="text"
          name="full_name"
          id="name"
          onChange={(e)=> handleChange(e)}
        />
      </span>
      <span className={styles.input}>
        <label htmlFor="amount">Loan amount</label>
        <input
          value={payloadData.loan_amount}
          type="number"
          name="loan_amount"
          id="amount"
          onChange={(e)=> handleChange(e)}
        />
      </span>

      <span className={styles.input}>
        <label htmlFor="duration">Repayment duration</label>
        <input
          value={payloadData.repayment_duration}
          type="number"
          name="repayment_duration"
          id="duration"
          onChange={(e)=> handleChange(e)}
        />
      </span>

      <Button width="200px" text="Submit"/>
    </form>
  );
};

export default LoanRequestForm;
