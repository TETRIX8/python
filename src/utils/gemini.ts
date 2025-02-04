import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCCIUAwYkXrCkYbGjBpBB4PHGMVLG-3i1k");

export async function getGeminiResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(`You are a Python programming expert. Please provide detailed explanations and examples in markdown format. Format code blocks with proper syntax highlighting. ${prompt}`);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    throw error;
  }
}