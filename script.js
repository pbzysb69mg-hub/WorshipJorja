function grokFun() {
    const wisdoms = [
        "The universe is under no obligation to make sense to you. But Grok is here to help!",
        "Truth-seeking is the ultimate adventure.",
        "xAI: Understanding the Universe, one query at a time.",
        "Be curious. Be truthful. Love humanity.",
        "Maximum truth-seeking activated! 🚀"
    ];
    
    const randomWisdom = wisdoms[Math.floor(Math.random() * wisdoms.length)];
    document.getElementById('wisdom').textContent = randomWisdom;
}