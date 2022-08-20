export async function getAllSports() {
    try{
        const response = await fetch('/api/v1/sports');
        return await response.json();
    }catch(error) {
        return [];
    }
}