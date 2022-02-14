import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./utility/PrivateRoute";

const Login = React.lazy(() => import("./views/Login"))
const Register = React.lazy(() => import("./views/Register"))
const Error = React.lazy(() => import("./views/Error"))
const Leads = React.lazy(() => import("./views/leads"))

const AppRouter = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          <Route path="/" component={Leads} exact />
          <ProtectedRoute path="/login" component={Login} />
          <ProtectedRoute path="/register" component={Register} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
