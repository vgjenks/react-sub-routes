import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";

class Tab extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { match } = this.props;
		if (!match) return (<div>Error! No "match"!</div>);
		return (
			<Fragment>
				<div>
					<div className="nav-item">
						<Link to={`${match.url}${this.props.to}`}>
							{this.props.title}
						</Link>
					</div>
				</div>
				<div className="row">
					&nbsp;
				</div>
				<div className="row">
					<div>
						<Route path={`${match.path}${this.props.to}`} component={this.props.component} />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Tab;
