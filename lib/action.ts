const playerTag = "232YJYPRQVC"
const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI5ODk1MmZjLWEzMDctNGQ2Yi1iOTVkLWNjNzNmMzc2NjdkMyIsImlhdCI6MTc2NDgwMDg1Nywic3ViIjoiZGV2ZWxvcGVyLzQ1YTdlYTY4LTZmMzctOTM2OS04MzRkLWNlZjdhNGNmOTIxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMjguMTkzLjE1NC4xNjgiLCI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.oLmHqEUI4590-5tYh9t4bU7gyOBy4evJPfZ_dEQDUutKAJ6Foxs771VkZBtC8NmXQlKwOQ1L52I6Ad1cw8XkRg"


console.log(apiKey)
const response = await fetch(`https://proxy.royaleapi.dev/v1/players/%${playerTag}/battlelog`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
})
console.log(response)

export {};