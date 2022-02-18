import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions.js'
import AddTodo from './AddTodo'
import Todo from './Todo'

class TodoList extends React.Component {
	constructor(props) {
		super(props)
	}

	updateItem = (index, newId, newData) => {
		const newList = [...this.props.list]
		if (newId && typeof +newId === 'number' && !isNaN(newId)) {
			newList[index].id = +newId
		}
		if (newData.trim()) {
			newList[index].data = newData
		}
		newList[index].date = moment()
		this.props.updateTodo(newList)
	}
	deleteItem = (index) => {
		const newList = [...this.props.list]
		newList.splice(index, 1)
		this.props.deleteTodo(newList)
	}
	render() {
		return (
			<div>
				<h2>Todo List</h2>
				<AddTodo />
				<ul>
					{Array.isArray(this.props.list) &&
						this.props.list.map((item, index) => (
							<Todo
								key={index}
								index={index}
								item={item}
								updateItem={this.updateItem}
								deleteItem={this.deleteItem}
							/>
						))}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		list: state.todoReducers.list,
	}
}

export default connect(mapStateToProps, { updateTodo, deleteTodo })(TodoList)
