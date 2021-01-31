import React, { Component} from 'react'

class FormEdit extends Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      first: "First",
      last: "Last",
      temp: { first: "", last: "" }
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.editHandler = this.editHandler.bind(this)
    this.save = this.save.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  cancel() {
    
    this.setState({ edit: !this.state.edit })
  }

  editHandler() {
    
    this.setState(prevState => ({
      edit: !prevState.edit
    }))
  }

  onChangeHandler(e) {
    
    this.setState({ temp: { ...this.state.temp, [e.target.name]: e.target.value } })
  }

  save() {
   
    this.setState({ edit: false, first: this.state.temp.first, last: this.state.temp.last })
  }

  render() {
    if (this.state.edit) {
      return (
        <div className="container">
          <form action="">
            <label htmlFor="">First</label>
            <input name="first" type="text" value={this.state.temp.first} onChange={this.onChangeHandler} />
            <label htmlFor="">Last</label>
            <input name="last" type="text" value={this.state.temp.last} onChange={this.onChangeHandler} />
          </form>
          <button className="button" onClick={this.save}>Save</button>
          <button className="button" onClick={this.cancel}>Cancel</button>
        </div>
      )
    } else {
      return (
        <div className="container">
          <div className="name">
            <h1 id="first">{this.state.first}</h1>
            <h1 id="last">{this.state.last}</h1>
          </div>

          <button className="button edit-btn" onClick={this.editHandler}>Edit</button>
        </div>
      )
    }
  }
}

export default FormEdit