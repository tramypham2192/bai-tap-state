import React, { Component } from 'react'

export default class DisplayGlassItem extends Component {
    render() {
      const {item, func} = this.props
      console.log(item.url)
      return (
        <div className='card'> 
          <img className='card-img-top' src={item.url} alt='Title' />
          <div className='card-body'>
              <h4 className='card-title'>{item.name}</h4>
              <p className='card-text'>{item.price}</p> 
              <button onClick={() => func(item)} className='btn btn-danger'>Xem thu</button> 
          </div>
        </div>
    )
  }
}
