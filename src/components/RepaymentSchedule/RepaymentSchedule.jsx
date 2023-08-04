import React from "react";
import styles from "./repaymentSchedule.module.css";
import { dateFormat, formatCurrency } from "../../utils";

const RepaymentSchedule = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.block}>
          <span>FULL NAME :</span>
          <p>{data?.FULL_NAME}</p>
        </div>
        <div className={styles.block}>
          <span>LOAN AMOUNT :</span>
          <p>{formatCurrency(data?.LOAN_AMOUNT || "0")}</p>
        </div>
        <div className={styles.block}>
          <span>REPAYMENT DURATION :</span>
          <p>{data?.REPAYMENT_DURATION}</p>
        </div>
        <div className={styles.block}>
          <span>CUMULATIVE REPAYMENT AMOUNT :</span>
          <p>{formatCurrency(data?.CUMULATIVE_REPAYMENT_AMOUNT || "0")}</p>
        </div>
        <div className={styles.block}>
          <span>DATE :</span>
          <p>{dateFormat(data?.DATE)}</p>
        </div>
      </div>
    </div>
  );
};

export default RepaymentSchedule;
