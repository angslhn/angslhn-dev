export default function Age(): string {
    const date: Date = new Date()
    
    let age: number = date.getFullYear() - 2005

    if ((date.getMonth() < 8) || (date.getMonth() === 8 && date.getDate() < 3)) age -= 1

    return age.toString()
}