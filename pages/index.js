import Head from "next/head";
import { Inter } from "@next/font/google";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  synchronizationJobList,
  jobList,
  initialPriorities,
} from "../redux/jobList/jobListSlice";

const Home = (props) => {
  const { priorities } = props;

  const dispatch = useDispatch();
  const jobListData = useSelector(jobList);

  useEffect(() => {
    synchronizationStoreAndLocalStorage();
    initialPrioritiesData();
  }, []);

  const synchronizationStoreAndLocalStorage = async () => {
    await dispatch(synchronizationJobList());
  };

  const initialPrioritiesData = async () => {
    await dispatch(initialPriorities(priorities));
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

export async function getServerSideProps() {
  // Fetch data from an API or database
  const res = await fetch("http://localhost:3000/api/priorities");
  const priorities = await res.json();

  // Pass data to the page via props
  return { props: { priorities } };
}
export default Home;
