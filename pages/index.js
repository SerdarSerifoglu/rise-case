import Head from "next/head";
import { Inter } from "@next/font/google";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { synchronizationJobList, jobList } from "../redux/jobList/jobListSlice";

const Home = () => {
  const dispatch = useDispatch();
  const jobListData = useSelector(jobList);

  useEffect(() => {
    synchronizationStoreAndLocalStorage();
  }, []);

  const synchronizationStoreAndLocalStorage = async () => {
    await dispatch(synchronizationJobList());
  };
  return (
    <>
      <Head>
        <title>Rise-Case</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JobForm />
      <JobList listData={jobListData}></JobList>
    </>
  );
};

export default Home;
