// netlify/functions/chat.js
// Serverless proxy for Gemini API to protect the API key in production.

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { 
            statusCode: 405, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Method Not Allowed" }) 
        };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return { 
            statusCode: 500, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Gemini API key not configured on the deployment server." }) 
        };
    }

    try {
        const bodyData = JSON.parse(event.body);

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        });

        if (!response.ok) {
            const errText = await response.text();
            return {
                statusCode: response.status,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ error: `Gemini API error: ${errText}` })
            };
        }

        const data = await response.json();
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: error.message })
        };
    }
};
