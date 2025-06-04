export async function getAlbums() {
    try {
        const res = await fetch("http://localhost:4000/albums", {
            cache : 'force-cache'
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error";
    }
}