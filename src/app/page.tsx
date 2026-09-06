import Link from "next/link";
import { Fragment } from "react";
import Page from "~/components/Page";
import TiledDiv from "~/components/TiledDiv";

const faq = [
  {
    question: "How much time do I need to spend on my mod?",
    text: "Doesn't matter as long as you commit regularly! You still need Hackatime tho!",
    node: (
      <>
        Doesn't matter as long as you commit regularly!
        <br />
        <b>You still need Hackatime tho!</b>
      </>
    ),
  },
  {
    question: "Do I need Minecraft for this YSWS?",
    text: "No, you don't need an account to create a mod and you can get one after!",
  },
  {
    question: "What do I need to know before I start?",
    text: "Just basic Java! If you're new, our guide links some beginner friendly resources and walks you through setting everything up.",
    node: (
      <>
        Just basic Java! If you're new, our <Link href="/guide">guide</Link> links some beginner friendly
        resources and walks you through setting everything up.
      </>
    ),
  },
  {
    question: "Is this legit?",
    text: "Yep! This program is ran by Hack Club, an awesome nonprofit powered by donations. You can view our finances here.",
    node: (
      <>
        Yep! This program is ran by <a href="https://hackclub.com/philosophy">Hack Club</a>, an
        awesome nonprofit powered by donations, you can view our{" "}
        <a href="https://hcb.hackclub.com/minecraft-modding-ysws">finances here</a>.
      </>
    ),
  },
  {
    question: "Can I submit an old mod?",
    text: "Sorry! But it needs to be new.",
  },
  {
    question: "Can I use MCreator/AI?",
    text: "No. You must code the mod yourself.",
  },
  {
    question: "Can I use libraries? Can I use Kotlin?",
    text: "Yup!",
  },
  {
    question: "Do I have to use Fabric?",
    text: "We use Fabric in our guide since it's the most beginner friendly, but other loaders like neoforge should work too.",
    node: (
      <>
        We use <a href="https://fabricmc.net/">Fabric</a> in our guide since its the simplest but other loaders like <a href="https://neoforge.dev/">neoforge</a> work too.
      </>
    ),
  },
  {
    question: "Can I make a shader instead?",
    text: "Of course! Shaders are awesome!",
  },
  {
    question: "What prizes can I win?",
    text: "Stickers, plus a game like Minecraft or Hytale, or a server. Get 300 downloads in your mod's first month and you'll also get Terraria for free!",
  },
  {
    question: "Other questions?",
    text: "Join our Slack channel (#mc-modding) on Hack Club's Slack and follow the instructions there to join.",
    node: (
      <>
        Join{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.slack.com/client/T0266FRGM/C07NQ5QAYNQ">
          our slack channel
        </a>{" "}
        (#mc-modding) on{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://slack.hackclub.com">
          Hack Club's Slack
        </a>.
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <Page>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://hackcraft.hackclub.com/#website",
                url: "https://hackcraft.hackclub.com",
                name: "Hackcraft",
              },
              {
                "@type": "FAQPage",
                mainEntity: faq.map(({ question, text }) => ({
                  "@type": "Question",
                  name: question,
                  acceptedAnswer: { "@type": "Answer", text },
                })),
              },
            ],
          }),
        }}
      />
      <TiledDiv id="header" background="dirt">
        <h1 id="subtitle" style={{ fontSize: "1.2em" }}>
          <span>Ship a mod</span>
          <span>Get Minecraft{/*And more?*/}</span>
        </h1>
        <div
          style={{
            paddingTop: "1em",
            paddingBottom: "7.5em",
            textAlign: "center",
          }}>
          <Link
            className="btn hoverable"
            style={{
              margin: "3px",
            }}
            href="/guide">
            Tutorial
          </Link>
          <Link
            className="btn hoverable"
            style={{
              margin: "3px",
            }}
            href="/gallery">
            Gallery
          </Link>
          <Link
            className="btn hoverable"
            style={{
              margin: "3px",
            }}
            href="https://lumen.hackcraft.hackclub.com/">
            Shaders
          </Link>
          <Link
            className="btn hoverable"
            style={{
              margin: "3px",
            }}
            href="/projects">
            Submit
          </Link>
        </div>
      </TiledDiv>
      <TiledDiv background="cobblestone">
        <div className="grid-steps" style={{ paddingTop: "1em" }}>
          <div
            className="item-step hoverable"
            style={{ backgroundImage: "url(/images/code.webp)" }}>
            <div className="mc-number">1</div>
            <p className="item-text">Make a mod</p>
          </div>
          <div
            className="item-step hoverable"
            style={{ backgroundImage: "url(/images/time.webp)" }}>
            <div className="mc-number">2</div>
            <p className="item-text">Track time</p>
          </div>
          <div
            className="item-step hoverable"
            style={{ backgroundImage: "url(/images/modrinth.webp)" }}>
            <div className="mc-number">3</div>
            <p className="item-text">Publish it on Modrinth</p>
          </div>
          <div
            className="item-step hoverable"
            style={{ backgroundImage: "url(/images/minecraft.webp)" }}>
            <div className="mc-number">4</div>
            <p className="item-text">Get prizes!</p>
          </div>
        </div>
      </TiledDiv>
      <TiledDiv background="deepslate" style={{ paddingTop: "1em" }}>
        <div className="section">
          <h2 className="player1">I see the game you mean.</h2>
          <p className="player2">Minecraft?</p>
          <p className="player1">
            Yes. Take care. The player is ready to reach a higher level in it, they may soon see the
            code.
          </p>
          <p className="player2">
            They read our thoughts like they were code on a screen. All they need to do is reach out
            and make changes.
          </p>
          <p className="player1">
            Change the code, and change the universe. You can do whatever you want. There&apos;s
            unlimited freedom.
          </p>
          <p className="player2">Go out and make something cool.</p>
          <p className="player1">Join others as they create their own universes.</p>
          <a href="/gallery" target="_blank" rel="noopener">
            just like these mods.
          </a>
          <h3>Check out the mods teens made last time!</h3>
          <video controls src="/video.mp4" preload="metadata" width="100%" />
          <h3>Craft a mod...</h3>
          <p>
            Never made a mod? It's the perfect time to build one. For inspiration, check out{" "}
            <Link href="/gallery" target="_blank">
              the gallery
            </Link>{" "}
            or{" "}
            <a
              href="https://discord.com/channels/507304429255393322/1079906503076626573"
              target="_blank"
              rel="noopener noreferrer">
              Fabric's Discord
            </a>
            !
          </p>
          <p>
            More of a social coder? You can also{" "}
            <a href="https://hackclub.com/slack?event=HackCraft">
              hang out online with other high schoolers
            </a>{" "}
            learning to build their first mods.
          </p>
          <h3>Place the blocks...</h3>
          <p>
            Create a mod. Try to make something polished that is fun or cool that people actually
            want to download.
          </p>
          <h3>Get the game...</h3>
          <p>
            Publish your mod to the blocky world on{" "}
            <a href="https://modrinth.com" target="_blank" rel="noopener noreferrer">
              Modrinth
            </a>{" "}
            and share your source code to a platform like <a href="https://github.com/">GitHub</a>{" "}
            to get stickers and a game like minecraft or hytale or a server. On top of that if you
            get 300 downloads in the first month, you get{" "}
            <a href="https://www.terraria.org/">Terraria</a> for free!
          </p>
          <h2>FAQ</h2>
          {faq.map(({ question, text, node }) => (
            <Fragment key={question}>
              <h3>- {question}</h3>
              <p>{node ?? text}</p>
            </Fragment>
          ))}
        </div>
      </TiledDiv>
    </Page>
  );
}
