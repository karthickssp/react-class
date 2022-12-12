import React from "react";

 class Reactref extends React.Component {
    constructor(props) {
      super(props);
         this.textref=React.createRef();
        // this.focusTextInput=this.focusTextInput.bind(this);
      }
      focusTextInput=()=>

      {
        this.textref.current.focus();
      }
    
  render(){ 
  return (
      <div>
      <input type="text" ref={this.textref}/>
      <input button="button" value="Focus the text" onClick={this.focusTextInput} />
      </div>
    );
  }
}
export default Reactref