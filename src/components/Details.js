import moment from 'moment'
import {} from 'react-router-dom'
import { deleteTodo, updateTodo } from '../redux/actions'
import { connect } from 'react-redux'
import React from 'react'

class Details extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isEditing: false,
			updateId: '',
			updateData: '',
		}
	}

	// const itemTodo = list.find((todo) => +params.idTodo === todo.id)
	// const index = itemTodo.id

	// update = (index, newData) => {
	// 	const listTodo = [...list]
	// 	listTodo[index].data = newData
	// 	listTodo[index].date = moment()

	// 	dispatch(updateTodo(listTodo))
	// }
	// handleUpdate = () => {
	// 	update(index, updateData)
	// 	setIsEditing(false)
	// }
	// handleDelete = () => {
	// 	const listTodo = [...list]
	// 	listTodo.splice(index, 1)
	// 	dispatch(deleteTodo(listTodo))
	// }

	render() {
		let { isEditing, updateData } = this.state
		return (
			<div>
				<h1>Todo Item</h1>
				<div className="item">
					{isEditing ? (
						<>
							<input
								value={updateData}
								onChange={(e) => this.setState({ updateData: e.target.value })}
							/>
							<button onClick={this.handleUpdate}>Save</button>
						</>
					) : (
						<div>
							<span>{this.props.index}. </span>
							<span
								style={{
									padding: 12,
									minWidth: '120px',
									display: 'inline-block',
									fontWeight: 500,
								}}
							>
								{this.props.itemTodo.data}
							</span>
							<span style={{ floatRight: 'right' }}>
								{moment(this.props.itemTodo.date).format('DD/MM/YYYY hh:mm:ss')}
							</span>
						</div>
					)}
					<div>
						<button onClick={() => this.setState({ isEditing: true })}>
							<i className="far fa-edit"></i>
						</button>
						<button onClick={this.handleDelete}>
							<i className="far fa-times"></i>
						</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.todoReducers.list,
	}
}
export default connect(mapStateToProps, { updateTodo, deleteTodo })(Details)
