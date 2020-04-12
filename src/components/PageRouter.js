import React from "react";
import { HOME } from "../urls";
import { Route, Switch } from "react-router-dom";
import HomeView from "./HomeView";
import PageNotFound from "./PageNotFound";

const PageRouter = props => {
	return (
		<Switch>
			<Route exact path={HOME} component={HomeView} />
			<Route component={PageNotFound} />
		</Switch>
	);
};

PageRouter.propTypes = {};

export default PageRouter;
