export default async function getOrders2() {
    try {
        const res = await fetch(`http://localhost:4000/orders`)

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error"
    }
}