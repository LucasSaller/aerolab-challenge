import React, { Suspense } from "react";
import { getUser } from "../api/user";
import History from "./History";
import Loader from "../components/Loader";

const page = () => {
  const userPromise = getUser();
  return (
    <Suspense fallback={<Loader />}>
      <History userPromise={userPromise} />
    </Suspense>
  );
};

export default page;
