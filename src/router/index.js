import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Suspense } from "react";

import Error from "compontents/Error";

import Main from "page/Main";
import User from "page/User";
import Set from "page/Set";
import Today from "page/Today";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="user">
        <Route index element={<User />} />
      </Route>
      <Route
        path="today"
        element={
          <Suspense fallback={<>isloading</>}>
            <Today />
          </Suspense>
        }
        errorElement={<Error />}
      />

      <Route path="set" element={<Set />} />
    </Route>
  )
);

export default router;
