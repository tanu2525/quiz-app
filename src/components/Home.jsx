import React from "react"
import { NavLink } from "react-router-dom"
const Home = () => {
	return (
		<main>
			<h2 className="mt-5">Welcome to online quiz for everyone</h2>
			<p >Here you can find quizzes on various topics</p>
			<p>You can also create your own quizzes</p>
            <h3>Start quiz now</h3>
			<button className="btn btn-primary" >
			
							<NavLink className="nav-link" to={"/quiz-stepper"}>
								Take Quiz
							</NavLink>
			
			</button>

		</main>
	)
}

export default Home
