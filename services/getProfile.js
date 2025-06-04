export async function getProfile() {
    try {
        const res = await fetch("http://localhost:4000/profile", {
            cache: "no-store", // ssr
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error";
    }
}
