import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Emoji | Enhance</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>🤖 emoji, enhance</h1>
          </div>
          <div className="header-subtitle">
            <h2>generate emojis to accurately represent users' feelings on social media</h2>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
