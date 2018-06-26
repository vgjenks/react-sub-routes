import React, { Component } from "react";
import { Link } from "react-router-dom";

class NestedSubRoute extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div>
					<h1>Nested Sub-Route</h1>
				</div>
				<div>
					I should be nested in the page.
				</div>
				<div>
					<Link to="/">Back to top</Link>
				</div>
			</div>
		);
	}
}

export default NestedSubRoute;
