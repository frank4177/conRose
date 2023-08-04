import React, { useState } from "react";

//STYLES
import styles from "./RepaymentScheduleTable.module.css";

//COMPONENTS
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { formatCurrency } from "../../../utils";

const RepaymentScheduleTable = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data?.data?.length / usersPerPage);

  const changePage = (value) => {
    setPageNumber(value);
  };

  return (
    <>
      {data?.data?.length === 0 ? (
        <span>No result found</span>
      ) : (
        <>
          <div className={styles.container}>
            <table>
              <thead className={styles.thead}>
                <tr className={styles.tr}>
                  <th>EXPECTED REPAYMENT AMOUNT</th>
                  <th>INTEREST</th>
                  <th>LOAN BALANCE</th>
                  <th>MONTH COUNT</th>
                  <th>TRANSACTION ID</th>
                </tr>
              </thead>

              <tbody className={styles.tbody}>
                {data?.data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((item) => (
                    <tr className={styles.tr} key={item.ID}>
                      <td className={styles.td}>
                        {formatCurrency(item.EXPECTED_REPAYMENT_AMOUNT)}
                      </td>
                      <td className={styles.td}>
                        {formatCurrency(item.INTEREST)}
                      </td>
                      <td className={styles.td}>
                        {formatCurrency(item.LOAN_BALANCE)}
                      </td>
                      <td className={styles.td}>{item.MONTH_COUNT}</td>
                      <td>{item.TRANSACTION_ID}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className={styles.pagination}>
            <Pagination
              onChange={changePage}
              current={pageNumber}
              total={data?.data?.length}
              showSizeChanger={false}
              totalBoundaryShowSizeChanger={false}
              pageSizeOptions={["4"]}
              simple={true}
              prevIcon={<BsArrowLeftSquare size="19" />}
              nextIcon={<BsArrowRightSquare size="19" />}
              // style={{display:"flex", alignItems:"center", backgroundColor:"red", height:"50px"}}
            />
          </div>
        </>
      )}
    </>
  );
};

export default RepaymentScheduleTable;
