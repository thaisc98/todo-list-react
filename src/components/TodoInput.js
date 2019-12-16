import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Add to-do item"/>
                    </div>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}
