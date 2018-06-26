import React, { Component } from "react";
import { Link } from "react-router-dom";

class SubRoute extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div>
					<h1>Sub-Route</h1>
				</div>
				<div>
					I should have replaced the last page.
				</div>
				<div>
					<Link to="/">Back to top</Link>
				</div>
			</div>
		);
	}
}

export default SubRoute;
