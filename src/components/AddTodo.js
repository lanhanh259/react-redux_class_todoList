import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import moment from 'moment'

class AddTodo extends React.Component {
	constructor(props) {
		super(props)
		this.state = { inputValue: '' }
	}

	nextTodoId(list) {
		const maxId = list.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
		return maxId + 1
	}

	updateInput = (inputValue) => {
		this.setState({ inputValue })
	}

	handleAddTodo = () => {
		const trimInput = this.state.inputValue.trim()
		if (trimInput) {
			const newList = [...this.props.list]
			const newTodo = {
				id: this.nextTodoId(newList),
				data: this.state.inputValue,
				date: moment(),
			}
			newList.push(newTodo)
			this.props.addTodo(newList)

			this.setState({ inputValue: '' })
		}
	}
	render() {
		return (
			<form>
				<input
					value={this.state.inputValue}
					placeholder="Add jobs"
					onChange={(e) => this.updateInput(e.target.value)}
				></input>
				<i
					style={{ fontSize: '20px', cursor: 'pointer', marginLeft: '8px' }}
					className="fal fa-plus-circle add-todo"
					onClick={this.handleAddTodo}
				></i>
			</form>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		list: state.todoReducers.list,
	}
}
export default connect(mapStateToProps, { addTodo })(AddTodo)
