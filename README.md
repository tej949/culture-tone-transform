CultureBridge is an AI-powered tool that rewrites professional emails to match the tone, etiquette, and formality of different cultural business standards — British, American, Japanese, and more.
It helps users avoid “tone mistakes” that can cost job opportunities and saves over 2 hours a week typically spent rephrasing and double-checking tone.

✨ Key Features
🌐 Cultural Tone Adaptation
Rewrites emails to match 47+ global business norms using validated cultural rules.
📎 Context-Aware Rewriting
Differentiates between CVs, resumes, contracts, and informal messages.
🛡️ ToneGuard
Flags phrases that may be considered too blunt, informal, or inappropriate in the selected culture.
🚀 Ultra-Fast Performance
Smart caching reduces API latency to under 300ms per rewrite.
🏢 Industry-Aware Mode
Custom tone transformation for tech, legal, and healthcare communications.

🧠 How It Works
sequenceDiagram
  User->>UI: Enter email + select target culture
  UI->>Gemini API: Send prompt with cultural metadata
  API->>App: Return adapted version
  App->>User: Show side-by-side comparison + tone suggestions
  
⚙️ Tech Stack
Layer	Technology
Frontend	React + TypeScript + Vite
UI	shadcn-ui + Tailwind CSS
AI Engine	Gemini 2.0 Flash API
Data Layer	ISO Culture Codes + Custom Rules
Hosting	Lovable (with custom domain)

🚀 Getting Started
# Clone the project
git clone https://github.com/yourusername/culturebridge.git
cd culturebridge

# Install dependencies
npm install

# Add your environment config
echo "VITE_GEMINI_API_KEY=your_key_here" >> .env
echo "VITE_GEMINI_ENDPOINT=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" >> .env
Snapshot
![Screenshot (235)](https://github.com/user-attachments/assets/066a5a27-9e26-4555-801e-46567a0a3e93)
before Rewriting of email
![Screenshot (239)](https://github.com/user-attachments/assets/5efffabc-bc52-4582-8200-441aab590e26)
after rewriting
![Screenshot (240)](https://github.com/user-attachments/assets/85577f96-46f0-409a-845d-d3ca193e95c5)

📈 Why It’s Better Than ChatGPT
Feature	CultureBridge ✅	Generic AI ❌
Culture-specific tone	✔ 47+ cultures	❌ Generic output
Attachment-aware	✔ CVs, contracts	❌ Blind to context
Industry-specific logic	✔ Enabled	❌ Not available
Performance	✔ 300ms cached	❌ 2–5s latency

💬 Real Impact
“After 12 rejections, CultureBridge helped me reword my applications. I got 3 offers in 2 weeks.”
— Maria R., Software Developer from Colombia

📜 License
MIT © 2024 VALLEM TEJOMAI

