import axios from "axios";
import { Config } from "../../config/config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

// Request loan
export const useRequestLoan = () => {
  const [reload, setReload] = useState(0);
  const loanRequest = async (payload) => {
    try {
      const { data } = await axios.post(`${Config.url.API_URL}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.result === true) {
        toast.success("Loan requested!", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
        });
      }
      setReload(reload + 1)
      return data;
    } catch (error) {
    }
  };

  return { loanRequest, reload };
};


// GET ALL LOAN REQUESTS
export const useFetchAllLoans = (reload, setOpen) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLoanRequests = async () => {
      setIsLoading(true)
      try {
        const { data } = await axios.post(
          `${Config.url.API_URL}`,
          {
            action: "get_all_loan_request",
            transaction_id: "",
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setOpen(false)
        setIsLoading(false)
        setData(data);
        return data;
      } catch (error) {
        setIsLoading(false)
      }
    };

    fetchLoanRequests();
  }, [reload]);

  return { data , isLoading};
};


// FETCH REPAYMENT SCHEDULE
export const useFetchRepaymentSchedule = (traxID) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepaymentSchedule = async () => {
      setIsLoading(true)
      try {
        const { data } = await axios.post(
          `${Config.url.API_URL}`,
          {
            action: "get_repayment_schedule",
            transaction_id: `${traxID}`,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setIsLoading(false)
        setData(data);
        return data;
      } catch (error) {
        setIsLoading(false)
      }
    };

    fetchRepaymentSchedule();
  }, [traxID]);

  return { data, isLoading };
};