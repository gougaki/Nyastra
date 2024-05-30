import './App.css';
import React, { useState } from 'react';
import { DoTransliterate } from './js/MainTranslate';

function App() {
   const [text, setText] = useState('');
   const [translate, setTranslate] = useState('');

   const handleChange = (event) => {
      const newText = event.target.value;
      setText(newText);
      setTranslate( DoTransliterate(event.target.value) );
   };

  return (
   <>
      <div id="container">
         <div id="main_content">
               <div id="home">
                  <div id="bd" role="main">
                     <h1>Cara termudah untuk menulis Aksara Bali*</h1>
                     <div id="transdiv" className="gb">
                        <h3>Pratayang <abbr title="Teks yang Anda ketik/kopipas akan muncul pratayangnya di sini."><span style={{fontFamily: "Arial", fontSize: "smaller"}}>[?]</span></abbr></h3>
                        <div id="prev_label"></div>
                        <p><small>Catatan: "e" menghasilkan taling, "x" menghasilkan pepet. <a href="https://github.com/bennylin/transliterasijawa/issues">Berikan masukan!</a></small></p>
                        <textarea id="inp_txt" className="tb" value={translate}>{translate}</textarea>
                     </div>
                     <div id="output" className="gb">
                        <form name="formText" className="form-text">
                           {/* <input type="reset" value="reset" /> */}
                           <textarea id="ta" className="main_ta" name="editSrc" onChange={handleChange}></textarea>
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
