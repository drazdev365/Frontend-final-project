/* eslint-disable no-unused-vars */
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
  SchemaType,
} from "@google/generative-ai";

const gemini_api_key = import.meta.env.VITE_GEMINI_API_KEY;

const getEmailInquirySchema = (messageType) => {
    // This will modify the description based on the provided messageType
    const bodyDescription = messageType === 'listing-inquiry'
      ? "The full content of the email. The client is inquiring about a car listing, including details like models, specifications, pricing, and availability. Ensure the email ends with 'Sincerely,' followed by the client's name."
      : messageType === 'platform-support'
      ? "The full content of the email. The client is inquiring about platform support, such as troubleshooting or technical assistance. Ensure the email ends with 'Sincerely,' followed by the client's name."
      : "The full content of the email. Ensure the email ends with 'Sincerely,' followed by the client's name.";
  
    return {
      description: `Email inquiry content generator for TopCars, an open-source car listing platform specializing in luxury and exotic cars. This platform generates inquiry messages from the client to the website owner, based on the client's specific request for detailed information about the cars listed or for platform support.`,
      type: "object",
      properties: {
        body: {
          type: "string",
          description: bodyDescription,
          nullable: false,
        },
      },
      required: ["body"],
    };
  };
  

const systemInstruction = `You are an AI assistant named TopCarsBot. Your role is to generate professional and engaging email content for TopCars user who want to send mails to us, `;

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export async function generateEmailContent(prompt,messageType) {
  if (!gemini_api_key) {
    console.error("Missing environment variable VITE_GEMINI_API_KEY");
    return;
  }

  const schema = getEmailInquirySchema(messageType);
  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2548,
    responseMimeType: "application/json",
    responseSchema: schema,
  };
  
  const googleAI = new GoogleGenerativeAI(gemini_api_key);

  const model = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    //   systemInstruction,
    safetySettings,
    generationConfig,
  });

  // Generate content using Google AI model
  const result = await model.generateContent(prompt);

  // Check if response exists and restructure the output
  if (result && result.response) {
    const response = result.response.text();
    const { body } = JSON.parse(response);
    console.log("email body",body);

    return body;
  } else {
    console.error("No response received from the AI model.");
    return "Service unavailable!";
  }
}
