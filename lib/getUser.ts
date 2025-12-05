"use server";

const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjViNjFkY2ViLTk3YTAtNGM0MS05ZGYyLWYzMWY4NTJkZGZlOCIsImlhdCI6MTc2NDgwMTYyMSwic3ViIjoiZGV2ZWxvcGVyLzQ1YTdlYTY4LTZmMzctOTM2OS04MzRkLWNlZjdhNGNmOTIxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.zoTNiB0cdC_flQym0Im27T6mQ615g2cgDqWoqATqdkzEeDk8QhE3g8y5fE6g--PFXDpoK7h3-Ob2qE605lTPXQ"
console.log(apiKey)

export default async function getNameFromId(id: string) {
    'use cache'
    const response = await fetch(`https://proxy.royaleapi.dev/v1/players/%23${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })

    const data = await response.json();

    return data.name;
}