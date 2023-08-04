import React, { useState } from "react";
import styles from "./dashboard.module.css";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";
import LoanRequestForm from "../../components/Form/LoanRequest";
import {
  useFetchAllLoans,
  useRequestLoan,
} from "../../services/APIs/loanRequest";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const { loanRequest, reload } = useRequestLoan();
  const { data, isLoading } = useFetchAllLoans(reload, setOpen);
  const [payloadData, setPayloadData] = useState({
    action: "request_for_loan",
    full_name: "",
    loan_amount: "",
    repayment_duration: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    const data = { ...payloadData };
    data[e.target.name] = e.target.value;
    setPayloadData(data);
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("action", payloadData.action);
    formData.append("full_name", payloadData.full_name);
    formData.append("loan_amount", payloadData.loan_amount);
    formData.append("repayment_duration", payloadData.repayment_duration);
    loanRequest(formData);
  };

  // HANDLE MODAL
  const handleClick = () => {
    setOpen(true);
  };

  // HANDLE SEARCH
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = data?.data?.filter((item) => {
      return Object.values(item).some((value) => {
        return typeof value === "string" && value.toLowerCase().includes(query);
      });
    });

    setSearchResult(filtered);
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.btn_and_search_wrap}>
            <Button
              width="200px"
              size="15px"
              text="REQUEST LOAN"
              handleClick={handleClick}
            />

            <form action="">
              <input
                type="search"
                placeholder="Search..."
                name=""
                id=""
                onChange={(e) => handleSearch(e)}
                className={styles.seacrhBox}
              />
            </form>
          </div>

          <Table
            data={searchResult.length > 0 ? searchResult : data?.data}
            dataLength={
              searchResult.length > 0
                ? searchResult?.length
                : data?.total_search_record
            }
          />
        </div>
      )}

      {/* MODAL */}
      <Modal open={open} setOpen={setOpen}>
        <LoanRequestForm
          handleChange={handleChange}
          payloadData={payloadData}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
};

export default Dashboard;
