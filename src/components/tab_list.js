import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";

import "../assets/css/tablist.css";

// import NestedSubRoute1 from "./nested_sub_route1";
// import NestedSubRoute2 from "./nested_sub_route2";
// import NestedSubRoute3 from "./nested_sub_route3";
// import NestedSubRoute4 from "./nested_sub_route4";

class TabList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// let { match } = this.props;
		// if (!match) return (<div>Error! No "match"!</div>);
		return (
			<Fragment>
				<div className="nav">
					{this.props.children}
					{/* <div className="nav-item">
						<Link to={`${match.url}/nested-sub-route1`}>
							Tab 1
						</Link>
					</div>
					<div className="nav-item">
						<Link to={`${match.url}/nested-sub-route2`}>
							Tab 2
						</Link>
					</div>
					<div className="nav-item">
						<Link to={`${match.url}/nested-sub-route3`}>
							Tab 3
						</Link>
					</div>
					<div className="nav-item">
						<Link to={`${match.url}/nested-sub-route4`}>
							Tab 4
						</Link>
					</div> */}
				</div>
				{/* <div className="row">
					<Route path={`${match.path}/nested-sub-route1`} component={NestedSubRoute1} />
					<Route path={`${match.path}/nested-sub-route2`} component={NestedSubRoute2} />
					<Route path={`${match.path}/nested-sub-route3`} component={NestedSubRoute3} />
					<Route path={`${match.path}/nested-sub-route4`} component={NestedSubRoute4} />
				</div> */}
			</Fragment>
		);
	}
}

export default TabList;
