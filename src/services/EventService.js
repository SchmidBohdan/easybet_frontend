export async function getAllEvents(data) {
    try{
        const response = await fetch('/api/v1/sports/' + data.sportID);
        return await response.json();
    }catch(error) {
        return [];
    }

}