import React from 'react'
import PropTypes from 'prop-types'

const headers = ['Type', 'Evolution', 'Moves', 'Abilities', 'Enconters']

const Information = ({data}) => {
  const {abilities, enconters, evolutions, moves, types} = data

  const rowData = head => {
    switch (head) {
      case 'Type':
        return (
          <ul>
            {types.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      case 'Evolution':
        return (
          <ul>
            {evolutions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      case 'Abilities':
        return (
          <ul>
            {abilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      case 'Moves':
        return (
          <ul>
            {moves.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      default:
        return (
          <ul>
            {enconters.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
    }
  }

  return (
    <div className="information-container">
      <table className="information-table">
        {headers.map((header, index) => (
          <div key={index}>
            <div className="table-row-header">{header}</div>
            <tbody>
              <div className="table-row-data">{rowData(header)}</div>
            </tbody>
          </div>
        ))}
      </table>
    </div>
  )
}

Information.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Information
