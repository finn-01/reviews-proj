import React, { useState } from "react";

import Review from "./Review";

const App = () => {
	return (
		<main>
			<section className="container">
				<div className="title">
					<h2>Our reivews</h2>
					<div className="underLine"></div>
				</div>
				<Review />
			</section>
		</main>
	);
};

export default App;
