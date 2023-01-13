import './App.css';
import {useEffect, useState} from "react";
import { FaTwitter, FaTumblr, FaQuoteLeft } from "react-icons/fa";

function App() {
  const [isIzreka, setIzreka] = useState("");
  const [isBoja, setBoja] = useState("");
  const [isLink, setLink] = useState("");
  
  useEffect(() => {
    const ocitavanje = () => {
      setIzreka(skup[Math.round(Math.random() * 20)]);
      setBoja(boje[Math.round(Math.random() * 19)]);
    }

    ocitavanje();

  }, [],)
  
  const skup = [
    {name:"Steve Jobs", text:"Your time is limited, so don’t waste it living someone else’s life."},
    {name:"Jim Rohn", text:"Either you run the day, or the day runs you."},
    {name:"Earl Nightingale", text:"We become what we think about."},
    {name:"Eleanor Roosevelt", text:"Remember no one can make you feel inferior without your consent."},
    {name:"Booker T. Washington", text:"If you want to lift yourself up, lift up someone else."},
    {name:"Kevin Kruse", text:"Life isn’t about getting and having, it’s about giving and being."},
    {name:"Aristotle", text:"There is only one way to avoid criticism: do nothing, say nothing, and be nothing."},
    {name:"Kevin Kruse", text:"We must balance conspicuous consumption with conscious capitalism."},
    {name:"Frank Sinatra", text:"The best revenge is massive success."},
    {name:"Les Brown", text:"Too many of us are not living our dreams because we are living our fears."},
    {name:"Plato", text:"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."},
    {name:"Albert Einstein", text:"Strive not to be a success, but rather to be of value."},
    {name:"Jamie Paolinetti", text:"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless."},
    {name:"Booker T. Washington", text:"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."},
    {name:"Charles Swindoll", text:"Life is 10% what happens to me and 90% of how I react to it."},
    {name:"Chinese Proverb", text:"The best time to plant a tree was 20 years ago. The second best time is now."},
    {name:"Christopher Columbus", text:"You can never cross the ocean until you have the courage to lose sight of the shore."},
    {name:"Marie Curie", text:"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained."},
    {name:"Albert Einstein", text:"A person who never made a mistake never tried anything new."},
    {name:"Helen Keller", text:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us."}
  ];

  const boje = [
    {color: "black"},
    {color: "gray"},
    {color: "orange"},
    {color: "green"},
    {color: "lightgreen"},
    {color: "lightblue"},
    {color: "royalblue"},
    {color: "red"},
    {color: "pink"},
    {color: "purple"},
    {color: "brown"},
    {color: "sienna"},
    {color: "tomato"},
    {color: "indigo"},
    {color: "olive"},
    {color: "firebrick"},
    {color: "darkblue"},
    {color: "maroon"},
    {color: "midnightblue"},
    {color: "chocolate"}
  ]

  const tvituj = () => {
    let noviTvit = "https://twitter.com/intent/tweet?hashtags=quotes&related=fcc&text=" + encodeURIComponent('"' + isIzreka.text + '"' + " " + isIzreka.name);
    setLink(noviTvit);
  }
  
   const novaIzreka = () => {
    setIzreka(skup[Math.round(Math.random() * 19)]);
    setBoja(boje[Math.round(Math.random() * 19)]);
   }
   
  return (
      <div id="main" style={{backgroundColor: isBoja.color}}>
      <div id="quote-box" style={{color: isBoja.color}}>
        <p id="text"><FaQuoteLeft/> {isIzreka.text}</p>
        <p id="author">-{isIzreka.name}</p>
      <div className="dugmad">
        <a style={{backgroundColor: isBoja.color}} href={isLink} title="Tweet this quote!" onClick={tvituj} target="_blank" id="tweet-quote"><FaTwitter className='ikonica'/></a>
        <a style={{backgroundColor: isBoja.color}} href="https://www.tumblr.com/login" title="Post this quote on tumblr!" target="_blank" id="tumblr-quote"><FaTumblr className='ikonica'/></a>
        <button style={{backgroundColor: isBoja.color}} id="new-quote" onClick={novaIzreka}>New quote</button>
      </div> 
      </div>
      </div>
  );
}

export default App;
