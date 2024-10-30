import React from "react";

function Footer() {
	return (
		<div className="content">
			<div className="footer">
				<hr></hr>
				<div className="footer-grid">
					<ul>
						<li>
							<a href='#'>About </a>
						</li>
						<li>
							<a href='#'>Contact us </a>
						</li>
						<li>
							<a href='#'>News </a>
						</li>
						<li>
							<a href='#'>Press </a>
						</li>
					</ul>
					<ul>
						<li>
							<a href='#'>Terms of service</a>
						</li>
						<li>
							<a href='#'>Privacy policy </a>
						</li>
					</ul>
					<div>
						<h3>News</h3>
						<span style={{color: '#d6d6d6'}}>Don't miss a thing, stay up to date with the latest news from us.</span>
					</div>
				</div>
				<hr></hr>
			</div>
		</div>
	);
}

export default React.memo(Footer);
