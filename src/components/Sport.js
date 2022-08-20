import React from 'react'

export const Sport = ({getAllSports}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle} className="display-board">
            <h4 style={{color: 'white'}}>Get all sports</h4>
            <div className="btn">
                <button type="button" onClick={(e) => getAllSports()} className="btn btn-warning">Get all Sports</button>
            </div>
        </div>
    )
}