import React from 'react'
import '../App.css'

export const Outcome = ({onChangeForm, getAllOutcomes}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "green",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle} className="display-board">
            <h4 style={{color: 'white'}}>Get all outcomes</h4>
            <div className="btn">
                <form>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputSportId">Sport ID</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="sport_id" id="sport_id" placeholder="Sport ID" />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEventId">Event ID</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="event_id" id="event_id" placeholder="Event ID" />
                        </div>
                        <div className="form-group col-md-12">
                            <button type="button" onClick={(e) => getAllOutcomes()} className="buttonStyle btn btn-warning">Get all Outcome</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}