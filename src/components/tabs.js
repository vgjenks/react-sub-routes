import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import TabList from "./tab_list";
import Tab from "./tab";

import NestedSubRoute1 from "./nested_sub_route1";
import NestedSubRoute2 from "./nested_sub_route2";
import NestedSubRoute3 from "./nested_sub_route3";
import NestedSubRoute4 from "./nested_sub_route4";

class Tabs extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div>
					<h1>Tabs Example</h1>
				</div>
				<div>
					{/* <Route path="/tabs" component={TabList} /> */}
					<TabList>
						<Tab {...this.props} to="/nested-sub-route1" title="Tab 1" component={NestedSubRoute1} />
						<Tab {...this.props} to="/nested-sub-route2" title="Tab 2" component={NestedSubRoute2} />
						<Tab {...this.props} to="/nested-sub-route3" title="Tab 3" component={NestedSubRoute3} />
						<Tab {...this.props} to="/nested-sub-route4" title="Tab 4" component={NestedSubRoute4} />
					</TabList>
				</div>
			</div>
		);
	}
}

export default Tabs;
