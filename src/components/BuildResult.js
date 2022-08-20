import React from 'react'

export const BuildResult = ({objects}) => {
    if (objects?.events?.data?.length > 0) {
        objects = objects.events
    } else if (objects?.outcomes?.data?.length > 0) {
        objects = objects.outcomes
    }else if (objects?.sports?.data?.length > 0) {
        objects = objects.sports
    }

    console.log('users length:::', objects?.data)
    if (objects?.data?.length === 0) return null

    const ObjRow = (obj_row) => {
        return(
            <StrategyTable value={obj_row} />
        )
    }

    const objTable = objects.data?.map((obj) => ObjRow(obj))

    function StrategyHeader(obj) {
        switch (obj?.value?.data?.[0]?.type) {
            case 'outcome':
                return <tr>
                    <th>Outcome Id</th>
                    <th>Description</th>
                    <th>Cpid</th>
                    <th>Pr</th>
                    <th>Pd</th>
                </tr>
            case 'event':
                return <tr>
                    <th>Event Id</th>
                    <th>Description</th>
                    <th>Event Path ID</th>
                    <th>Sport ID</th>
                    <th>Event Type</th>
                </tr>
            case 'sport':
                return <tr>
                    <th>Sport Id</th>
                    <th>Description</th>
                    <th>Ep Id</th>
                    <th>EIC</th>
                </tr>
            default:
                return <h1>Invalid Input</h1>
        }
    }

    function StrategyTable(obj) {
        switch (obj?.value?.type) {
            case 'outcome':
                return <tr>
                    <td>{obj.value?.attributes.id}</td>
                    <td>{obj.value?.attributes.d}</td>
                    <td>{obj.value?.attributes.cpid}</td>
                    <td>{obj.value?.attributes.pr}</td>
                    <td>{obj.value?.attributes.pd}</td>
                </tr>
            case 'event':
                return <tr>
                    <td>{obj.value?.attributes.id}</td>
                    <td>{obj.value?.attributes.desc}</td>
                    <td>{obj.value?.attributes.event_path_id}</td>
                    <td>{obj.value?.attributes.sport_id}</td>
                    <td>{obj.value?.attributes.event_type}</td>
                </tr>
            case 'sport':
                return <tr>
                    <td>{obj.value?.attributes.id}</td>
                    <td>{obj.value?.attributes.desc}</td>
                    <td>{obj.value?.attributes.ep_id}</td>
                    <td>{obj.value?.attributes.eic}</td>
                </tr>
            default:
                return <h1>Invalid Input</h1>
        }
    }

    return(
        <div className="container">
            <h2>{objects?.data?.[0]?.type?.toUpperCase()}</h2>
            <table className="table table-bordered">
                <thead>
                <StrategyHeader value={objects} />
                </thead>
                <tbody>
                {objTable}
                </tbody>
            </table>
        </div>
    )
}