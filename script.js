// Array of topics
const topics = ["Depression", "Anxiety", "Stress"];

// Array of prompts for each topic
const prompts = {
  "Depression": [
    "Feeling like you're stuck in a dark place?",
    "Do you find it hard to get motivated?",
    "Are negative thoughts overwhelming your mind?",
    "Are you withdrawing from friends and family?"
  ],
  "Anxiety": [
    "Are you constantly worrying about the future?",
    "Do you feel restless or on edge?",
    "Is your mind racing with anxious thoughts?",
    "Do you find it difficult to relax?"
  ],
  "Stress": [
    "Are you feeling overwhelmed by tasks?",
    "Do you struggle to find balance in life?",
    "Is work or school causing constant pressure?",
    "Are you feeling burned out?"
  ]
};

// Array of relief responses for each topic
const responses = {
  "Depression": [
    "Try practicing mindfulness or meditation to stay present.",
    "Engage in physical activities, even light exercises can uplift your mood.",
    "Connect with someone you trust. Sometimes talking helps.",
    "Seek professional counseling or therapy if it feels too much to handle."
  ],
  "Anxiety": [
    "Practice deep breathing exercises or progressive muscle relaxation.",
    "Limit caffeine and other stimulants that may heighten anxiety.",
    "Write down your worries and tackle them one by one.",
    "Challenge your negative thoughts with evidence of what’s real."
  ],
  "Stress": [
    "Prioritize self-care with proper rest, healthy food, and hydration.",
    "Break your tasks into smaller, manageable chunks.",
    "Take regular breaks and practice deep breathing exercises.",
    "Engage in relaxing hobbies or spend time in nature."
  ]
};

// Function to generate random prompts and responses
function generatePromptResponse() {
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const prompt = prompts[topic][Math.floor(Math.random() * prompts[topic].length)];
  const response = responses[topic][Math.floor(Math.random() * responses[topic].length)];
  
  return {
    topic,
    prompt,
    response
  };
}

// Function to display prompts and responses
function displayPromptsAndResponses(numPrompts) {
  const results = [];

  for (let i = 0; i < numPrompts; i++) {
    const { topic, prompt, response } = generatePromptResponse();
    results.push(`Topic: ${topic}\nPrompt: ${prompt}\nResponse: ${response}\n`);
  }

  return results;
}

// Display 1000 prompts and responses in the console
const promptResponses = displayPromptsAndResponses(1000);
console.log(promptResponses.join('\n'));
