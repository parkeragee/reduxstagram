'use strict';

import React from 'react';

const Comments = React.createClass({

	renderComment(comment, i) {
		return (
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
				</p>
			</div>
		)
	},

	render() {
		console.log(this.props.postComments);
		return (
			<div className="comment">
				{this.props.postComments.map(this.renderComment)}
			</div>
		)
	}
});

export default Comments;
