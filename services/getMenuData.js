export async function getMenuListData() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/.netlify/functions/sidebar`, {
            next: {
                revalidate: 1 
            }
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error";
    }
}