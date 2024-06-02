import './App.css';
import React, { useEffect, useState } from 'react';
import { DoTransliterate } from './js/MainTranslate';
import { regex } from './js/Data';

function App() {
   const [text, setText] = useState('');
   const [translate, setTranslate] = useState('');

   const handleChange = (event) => {
      const newText = event.target.value.replace('x','ě').replace('X', 'Ě');
      setText(newText);
   };

   useEffect(() => {
      const normalizedText = text.replace('ě', 'e').replace('Ě', 'E').replace(/[^a-zA-Z0-9 ]/g, '');
      console.log(normalizedText);
      const charList = normalizedText.split(' ');
      const updatedList = charList?.map((char) => regex[char] || char)
      setTranslate( DoTransliterate( updatedList.join(' ') ) );
   }, [text]);

  return (
   <>
      <div id="container">
         <div id="main_content">
               <div id="home">
                  <div id="bd" role="main">
                     <h1>Cara termudah untuk menulis Aksara Bali*</h1>
                     <div id="transdiv" className="gb">
                        <p><small>Catatan: "e" menghasilkan taling, "x" menghasilkan pepet. <a href="https://github.com/bennylin/transliterasijawa/issues">Berikan masukan!</a></small></p>
                        <textarea id="inp_txt" className="tb" value={translate}>{translate}</textarea>
                     </div>
                     <div id="output" className="gb">
                        <form name="formText" className="form-text">
                           {/* <input type="reset" value="reset" /> */}
                           <textarea id="ta" className="main_ta" name="editSrc" onChange={handleChange} value={text}>{text}</textarea>
                           {/* <input name="buttonConvert" type="button" value="bali &gt; latin" /> */}
                        </form>
                     </div>
                  </div>
            </div>
         </div>
      </div>
   </>
   );
}

export default App;
