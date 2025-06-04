export async function getMenuListData() {
    try {
        const res = await fetch("http://localhost:4000/sideBar", {
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