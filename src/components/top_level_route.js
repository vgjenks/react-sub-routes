import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";

import NestedSubRoute from "./nested_sub_route";

class TopLevelRoute extends Component {
	componentDidMount() {
	}

	render() {
		let { match } = this.props;
		return (
			<div>
				<div>
					<h1>Top Level Route</h1>
				</div>
				<div>
					<Link to={`${match.url}/sub-route/ABC123XYZ456`}>View Sub-Route</Link>
				</div>
				<div>
					<Link to={`${match.url}/nested-sub-route`}>View Nested Sub-Route</Link>
					<Route path={`${match.path}/nested-sub-route`} component={NestedSubRoute} />
				</div>
			</div>
		);
	}
}

export default withRouter(TopLevelRoute);
