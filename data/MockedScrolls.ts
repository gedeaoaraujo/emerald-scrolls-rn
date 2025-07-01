import { randomUUID } from "expo-crypto";

export const scrollsList = [
    {
        id: randomUUID(),
        title: 'Silence at Breakfast',
        date: new Date().toISOString(),
        text: 'Today, the silence was louder than usual. I sat with my warm coffee in hand and watched the steam rise like a prayer. No one said a word — and yet, everything was spoken. Sometimes, what isn’t said is truer than anything well phrased.'
    },
    {
        id: randomUUID(),
        title: 'Rain and Memory',
        date: new Date().toISOString(),
        text: 'It rained this afternoon. The kind of rain that doesn’t flood, but soaks you on the inside. I stood by the window and remembered an umbrella I lost years ago. It wasn’t pretty, but it kept me dry. People are like that sometimes, too.'
    },
    {
        id: randomUUID(),
        title: 'Small Victories',
        date: new Date().toISOString(),
        text: 'Today, I managed to say “no” without feeling guilty. It was something simple — turning down an invitation I didn’t want to accept. But it was a victory. Small, perhaps, but mine. And that’s enough for today.'
    },
]