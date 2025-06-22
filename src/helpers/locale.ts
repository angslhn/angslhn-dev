export default function getLocale() {
    return navigator.language.toLowerCase().split("-")[0] === "id" ? "id" : "en"
}