import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
	// hook up a context object to a class component
	//static contextType = LanguageContext;

	renderSubmit(language) {
		return language === "english" ? "Submit" : "Voorleggen";
	}

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{({ language }) => this.renderSubmit(language)}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		//console.log(this.context);
		// const text = this.context === "english" ? "Submit" : "Voorleggen";
		// return <button className="ui button primary">{text}</button>;

		// using Consumer component
		return (
			<ColorContext.Consumer>
				{(color) => this.renderButton(color)}
			</ColorContext.Consumer>
		);

		{
			/* <ColorContext.Consumer>
				{(color) => (
					<button className={`ui button ${color}`}>
						<LanguageContext.Consumer>
							{/* Passing a child (function) into the Consumer */
		}
		{
			/* {(value) => value === 'english' ? 'Submit' : 'Voorleggen'} */
		}
		// 				{(value) => this.renderSubmit(value)}
		// 			</LanguageContext.Consumer>
		// 		</button>
		// 	)}
		// </ColorContext.Consumer> */}
	}
}

export default Button;
