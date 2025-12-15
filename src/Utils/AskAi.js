import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

export default async function AskAi(dish) {
  const prompt = `Aap ek professional chef hain. Mujhe ${dish} banane ki complete recipe chahiye.

IMPORTANT: Response STRICT JSON format mein hi dena hai, koi extra text nahi.

JSON Structure:
{
  "recipe_name": "Dish ka naam",
  "prep_time": "Preparation time",
  "cook_time": "Cooking time",
  "difficulty": "Easy/Medium/Hard",
  "servings": "Kitne logo ke liye",
  "ingredients": [
    {
      "name": "Ingredient naam in Hinglish",
      "quantity": "Quantity with units"
    }
  ],
  "instructions": [
    "Step 1 in Hinglish",
    "Step 2 in Hinglish"
  ],
  "tips": [
    "Cooking tip 1 in Hinglish",
    "Cooking tip 2 in Hinglish"
  ]
}

Instructions:
- Poori recipe HINGLISH (Hindi + English mix) mein likho
- Jaise log normally baat karte hain waise likhna hai
- Example: "Sabse pehle ek kadhai mein 2 spoon oil garam karo"
- Har step detailed aur clear hona chahiye
- Cooking tips zaroor include karo
- ONLY JSON response do, koi extra explanation nahi

Ab ${dish} ki recipe do:`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  // Remove markdown code blocks if present
  let text = response.text.trim();
  text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '');
  
  return JSON.parse(text);
}
