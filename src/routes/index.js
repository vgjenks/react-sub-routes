import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "../components/index";
import TopLevelRoute from "../components/top_level_route";
import SubRoute from "../components/sub_route";
import Tabs from "../components/tabs";

export default (
	<BrowserRouter>
		<div>
			<Switch>
				{/* <Route path="/tabs" component={Tabs} /> */}
				<Route path="/tabs" render={props => <Tabs {...props} />} />
				<Route path="/top-level-route/sub-route/:some_record_id" component={SubRoute} />
				<Route path="/top-level-route" component={TopLevelRoute} />
				<Route exact path="/" component={Index} />
			</Switch>
		</div>
	</BrowserRouter>
);