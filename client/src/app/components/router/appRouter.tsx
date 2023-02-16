import { Switch, Route, Redirect } from "react-router-dom"

import { routes } from "@/utils/constants"

import { publicRoutes } from "./routes"

const AppRouter = () => (
  <Switch>
    {publicRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} component={Component} exact />
    ))}

    <Redirect to={routes.HOME_ROUTE} />
  </Switch>
)

export default AppRouter
