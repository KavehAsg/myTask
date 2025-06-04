export default async function getOrders2() {
    try {
        const res = await fetch(`/.netlify/functions/orders`, {
            cache: 'no-store'
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error"
    }
}