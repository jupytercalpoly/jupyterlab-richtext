import React from 'react';


/**
 * A React component for the rich text menu's individual items/marks.
 */
export default class MenuItem extends React.Component<{format: string, active: boolean, handleClick: (e: React.SyntheticEvent) => void}> {

    constructor(props: any) {
        super(props);
        this.getFormatMark = this.getFormatMark.bind(this);
    }

    // /**
    //  * Gets the icon to be loaded based on the 'format' prop.
    //  * @returns - Hardcoded 'require' statements because 'require'
    //  * doesn't allow variables.
    //  */
    // getImgSrc() {
    //     switch (this.props.format) {
    //         case "strong":
    //             return require("../static/scribe-format-strong.svg");
    //         case "em":
    //             return require("../static/scribe-format-em.svg");
    //         case "underline":
    //             return require("../static/scribe-format-underline.svg");
    //         case "code":
    //             return require("../static/scribe-format-code.svg");
    //         case "strikethrough":
    //             return require("../static/scribe-format-strikethrough.svg");
    //         case "blockquote":
    //             return require("../static/scribe-format-blockquote.svg");
    //         default:
    //             break;
    //     }
    // }

    /**
     * Gets the name of the format in ProseMirror language.
     */
    getFormatMark() {
        switch (this.props.format) {
            case "format_bold":
                return "strong";
            case "format_italic":
                return "em";
            case "format_underline":
                return "underline";
            case "code":
                return "code";
            case "format_strikethrough":
                return "strikethrough";
            case "format_quote":
                return "blockquote";
            default:
                break;
        }
    }

    /**
     * Renders the menu item component.
     */
    render() {
        return (
                <i 
                // src={this.getImgSrc()} 
                // alt="formatting" 
                id={this.getFormatMark()} 
                className={this.props.active ? "activeMenuItem material-icons" : "menuItem material-icons"}
                onClick={this.props.handleClick}>{this.props.format}</i>
        )
    }

}