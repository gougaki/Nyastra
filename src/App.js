import './App.css';
import './styles/app.scss';
import React, { useEffect, useState } from 'react';
import { DoTransliterate } from './js/MainTranslate';
import { regex } from './js/Data';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import FavoriteHistory from './components/FavoriteHistory';

function App() {
   const [text, setText] = useState('');
   const [translate, setTranslate] = useState('');
   const [selectedOption, setSelectedOption] = useState('english');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

   const handleChange = (event) => {
      let newText = event.target.value;
      switch(selectedOption) {
         case 'bahasa': 
            newText = newText.replace('x','ě').replace('X', 'Ě');
            break;
         case 'english':
            break;
         default:
            break;
      }
      setText(newText);
   };

   useEffect(() => {
      const normalizedText = text.replace('ě', 'x').replace('Ě', 'X').toLocaleLowerCase();
      const charList = normalizedText.split(' ');
      const updatedList = charList?.map((char) => regex[char] || char);
      charList?.forEach(char => console.log(char, regex[char]))
      switch(selectedOption) {
         case 'bahasa':
            setText(text.replace('x','ě').replace('X', 'Ě'));
            setTranslate( DoTransliterate( normalizedText ) );
            break;
         case 'english':
            setText(text.replace('ě', 'x').replace('Ě', 'X'));
            setTranslate( DoTransliterate( updatedList.join(' ') ) );
            break;
         default:
            break;
      }
   }, [text, selectedOption]);

  return (
   <>
   {/* <Header /> */}
      <div id="container">
         <div id="main_content">
               <div id="home">
                  <div className="container-select">
                     <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="" disabled>Select an option</option>
                        <option value="bahasa">Latin</option>
                        <option value="english">English</option>
                        {/* <option value="aksara">Aksara Bali</option> */}
                     </select>
                  </div>
                  <div id="bd" role="main">
                     <div id="output" className="gb">
                        <form name="formText" className="form-text">
                           {/* <input type="reset" value="reset" /> */}
                           <textarea id="ta" className="main_ta" name="editSrc" onChange={handleChange} value={text}>{text}</textarea>
                           {/* <input name="buttonConvert" type="button" value="bali &gt; latin" /> */}
                        </form>
                     </div>

                     {/* <div className="button-container">
                        <button>Transliterasi</button>
                     </div> */}
                     <div id="transdiv" className="gb">
                        {selectedOption === 'bahasa' && 
                        <p><small>Catatan: "e" menghasilkan taling, "x" menghasilkan pepet.</small></p>}
                        <textarea id="inp_txt" className="tb" value={translate}>{translate}</textarea>
                     </div>
                  </div>
            </div>

            <FavoriteHistory />

            <div className="bg-image image-1" />
            <div className="bg-image image-2" />
            <div className="bg-image image-3" />
         </div>
      </div>
      <Footer />
   </>
   );
}

export default App;
