import React from 'react'

export const Event = ({onChangeForm, getAllEvents}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "orange",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle} className="display-board">
            <h4 style={{color: 'white'}}>Get all events</h4>
            <div className="btn">
                <form>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputSportId">Sport ID</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="sport_id" id="sport_id" placeholder="Sport ID" />
                        </div>
                        <div className="form-group col-md-12">
                            <button type="button" onClick={(e) => getAllEvents()} className="buttonStyle btn btn-warning">Get all Events</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}