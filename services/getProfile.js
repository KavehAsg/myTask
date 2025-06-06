export async function getProfile() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/.netlify/functions/profile`, {
            cache: "no-store", 
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error";
    }
}
