import React from "react";
import styles from "./repaymentSchedulePage.module.css";
import RepaymentSchedule from "../../components/RepaymentSchedule/RepaymentSchedule";
import Table from "../../components/Table/Table";
import RepaymentScheduleTable from "../../components/Table/RepaymentScheduleTable/RepaymentScheduleTable";
import { useFetchRepaymentSchedule } from "../../services/APIs/loanRequest";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import BackButton from "../../components/Button/BackButton/BackButton";
import Navbar from "../../components/Navbar/Navbar";

const RepaymentSchedulePage = () => {
  const location = useLocation();
  const { data, isLoading } = useFetchRepaymentSchedule(
    location?.state?.transactionID
  );

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <BackButton />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <RepaymentSchedule data={data} />

            <div className={styles.tableWrap}>
              <h3>Repayment Schedule</h3>
              <RepaymentScheduleTable data={data} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RepaymentSchedulePage;
