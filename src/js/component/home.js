import React from "react";
import TodoList from "./TodoList";

//create your first component
export function Home() {
	return (
		<div className="col-6 justify-content-center text-center mt-5">
			<TodoList />
		</div>
	);
}
