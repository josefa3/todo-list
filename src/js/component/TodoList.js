import React, { useState } from "react";

const TodoList = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	const agregarTarea = e => {
		if (e.keyCode == 13) {
			let nuevaLista = [];
			for (let i = 0; i < lista.length; i++) {
				nuevaLista.push(lista[i]);
			}
			nuevaLista.push(tarea);
			setLista(nuevaLista);
			setTarea("");
		}
	};

	const deleteItems = indexItem => {
		setLista(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	const contLista = lista.map(function(newTarea, i) {
		return (
			<li
				key={i}
				className="list-group-item mb-4 d-flex justify-content-between">
				{newTarea}
				<div className="btn" onClick={e => deleteItems(i)}>
					<i className="fas fa-times" />
				</div>
			</li>
		);
	});

	const Contador = lista.length;

	return (
		<React.Fragment>
			<h1 className="text-white bg-dark">{"TO DO LIST"}</h1>
			<div className="container mt-5">
				<input
					className="mb-5"
					value={tarea}
					onKeyDown={agregarTarea}
					onChange={e => {
						setTarea(e.target.value);
					}}
					type="text"
					placeholder="Escribir tarea..."
				/>
				<ul className="list-group list-group-flush text-center">
					{contLista}
				</ul>
				<div className="card-footer text-muted mt-3">
					{Contador === 0 ? "No tiene tareas" : Contador}
				</div>
			</div>
		</React.Fragment>
	);
};
export default TodoList;
