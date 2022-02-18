import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

class Todo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isEditing: false,
			updateId: '',
			updateData: '',
		}
	}
	handleUpdate = () => {
		this.props.updateItem(
			this.props.index,
			this.state.updateId,
			this.state.updateData
		)
		this.setState({
			isEditing: false,
		})
	}
	handleDelete = () => {
		this.props.deleteItem(this.props.index)
	}

	render() {
		let { item, index } = this.props
		return (
			<li>
				{this.state.isEditing ? (
					<>
						<input
							value={this.state.updateId}
							placeholder="id"
							onChange={(e) => this.setState({ updateId: e.target.value })}
						/>
						<input
							placeholder="job name"
							value={this.state.updateData}
							onChange={(e) => this.setState({ updateData: e.target.value })}
						/>
						<button className="btn" onClick={() => this.handleUpdate(index)}>
							Save
						</button>
					</>
				) : (
					<Link to={`/detail`}>
						<span>{item.id}. </span>
						<span
							style={{
								padding: 12,
								minWidth: '120px',
								display: 'inline-block',
								fontWeight: 500,
							}}
						>
							{item.data}
						</span>
						<span style={{ floatRight: 'right' }}>
							{moment(item.date).format(`DD/MM/YYYY hh:mm:ss`)}
						</span>
					</Link>
				)}
				<button
					className="btn"
					onClick={() => this.setState({ isEditing: true })}
				>
					<i className="far fa-edit"></i>
				</button>
				<button className="btn" onClick={this.handleDelete}>
					<i className="far fa-times"></i>
				</button>
			</li>
		)
	}
}

export default Todo
