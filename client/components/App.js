import React from "react"
import Axios from "axios"
//import any sub-components
import Navbar from "./navbar"
import Brand from "./Brand"
import Food from "./Food"
import SelectedFood from './SelectedFood'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			categories: [],
			selected: {}
		}

	}

	async componentDidMount() {
		try {
			const hashLoad = async () => {
				const id = window.location.hash.slice(1)
				if (id) {
					const res = await Axios.get(`/api/categories/${id}`)
					this.setState({ selected: res.data })
				}
				else {
					this.setState({ selected: {} })
				}
			}
			window.addEventListener('hashchange', hashLoad)
			hashLoad()

			const food = await Axios.get('/api/categories')
			this.setState({ categories: food.data })
		}
		catch (err) {
			console.log(err)
		}
	}

	render() {
		const { categories, selected } = this.state
		return (
			<>
				<Navbar />
				{selected.id ? null : <Brand />}

				{selected.id ? <SelectedFood selectedCat={selected} /> :
					<Food categories={categories} />}

			</>
		)
	}

	//constructor to initialize state
	//any lifecycle methods
	//any custom methods
	//render
}
export default App
