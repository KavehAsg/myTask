export async function getAlbums() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/.netlify/functions/albums`, {
            cache : 'force-cache'
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error";
    }
}