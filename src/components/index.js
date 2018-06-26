import React, { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div>
					<h1>Index</h1>
				</div>
				<div>
					<Link to="/top-level-route">Go to top level</Link>
				</div>
				<div>
					<Link to="/tabs">Go to tabs</Link>
				</div>
			</div>
		);
	}
}

export default Index;
