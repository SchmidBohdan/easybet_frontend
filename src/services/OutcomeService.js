export async function getAllOutcomes(data) {
    try{
        console.log(data)
        const response = await fetch('/api/v1/sports/' + data.sportID + '/events/' + data.eventID);
        return await response.json();
    }catch(error) {
        return [];
    }

}