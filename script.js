function greeting () {
    const emojis = ["💌", "💗", "❤️", "🐻", "💘", "🔆", "🫶", "💕", "🌹", "🎀", "✨", "💫", "🌟"]

    const random_emoji = emojis[Math.floor(Math.random() * emojis.length)]

    const current_time = new Date()
    
    let greeting = "Good Morning"
    
    if (current_time.getHours() > 12) {
        greeting = "Good Afternoon"
    }

    if (current_time.getHours() > 18) {
        greeting = "Good Evening"
    }

    document.getElementById("greetingDisplay").textContent = greeting + random_emoji

}