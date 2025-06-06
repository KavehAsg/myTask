export default async function getOrders() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/.netlify/functions/orders`, {
            cache: 'no-store'
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return "error"
    }
}