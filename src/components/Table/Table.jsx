import React, { useState } from "react";

//STYLES
import styles from "./table.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { dateFormat, formatCurrency } from "../../utils";
import { Link } from "react-router-dom";

//COMPONENTS
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const Table = ({ data, dataLength }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const usersPerPage = 10;

  const startIndex = (pageNumber - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentItems = data?.toReversed()?.slice(startIndex, endIndex);

  const changePage = (value) => {
    setPageNumber(value);
  };

  return (
    <>
      {dataLength === 0 ? (
        <span>No result found</span>
      ) : (
        <>
          <div className={styles.container}>
            <table>
              <thead className={styles.thead}>
                <tr className={styles.tr}>
                  <th>FULL NAME</th>
                  <th>LOAN AMOUNT</th>
                  <th>REPAYMENT DURATION</th>
                  <th>TRANSACTION ID</th>
                  <th>DATE CREATED</th>
                  <th></th>
                </tr>
              </thead>

              <tbody className={styles.tbody}>
                {currentItems?.map((item) => (
                  <tr className={styles.tr} key={item.ID}>
                    <td className={styles.td}>{item.FULL_NAME}</td>
                    <td className={styles.td}>
                      {formatCurrency(item.LOAN_AMOUNT)}
                    </td>
                    <td className={styles.td}>{item.REPAYMENT_DURATION}</td>
                    <td className={styles.td}>{item.TRANSACTION_ID}</td>
                    <td className={styles.td}>
                      {dateFormat(item.CREATED_TIME)}
                    </td>
                    <td>
                      <div className={styles.action}>
                        <Link
                          to="/repayment-schedule"
                          state={{
                            transactionID: `${item.TRANSACTION_ID}`,
                          }}
                          className={styles.view}
                        >
                          <span>View</span>
                          <AiOutlineEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.pagination}>
            <Pagination
              onChange={changePage}
              current={pageNumber}
              total={dataLength}
              simple={true}
              prevIcon={<BsArrowLeftSquare size="19" />}
              nextIcon={<BsArrowRightSquare size="19" />}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Table;
