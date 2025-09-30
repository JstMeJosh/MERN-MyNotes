export function formatDate(date){
    return date.toLocaleDateString("en-NG", {
        month: "short",
        day: "numeric",
        weekday: "long",
        year: "numeric",
    })
}