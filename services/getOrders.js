export default async function getOrders() {
    try {
        const res = await fetch("http://localhost:4000/orders", {
            cache: 'no-store'
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error"
    }
}