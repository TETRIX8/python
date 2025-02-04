const API_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const API_KEY = 'AIzaSyCCIUAwYkXrCkYbGjBpBB4PHGMVLG-3i1k';

export async function getGeminiResponse(prompt: string) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY,
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a Python programming expert. Please provide detailed explanations and examples in markdown format. Format code blocks with proper syntax highlighting. ${prompt}`
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error?.message?.includes("User location is not supported")) {
        throw new Error("К сожалению, API Gemini недоступно в вашем регионе. Пожалуйста, используйте VPN для доступа к сервису.");
      }
      throw new Error(errorData.error?.message || "Failed to get response from AI");
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error: any) {
    console.error("Error getting Gemini response:", error);
    throw error;
  }
}