import {Component} from "react";

class Button extends Component {

    shouldComponentUpdate(nextProps) {
        const {change: currentChange, locale: currentLocale} = this.props;
        const {change: nextChange, locale: nextLocale} = nextProps;

        // console.log(this.props);
        // console.log(nextProps);

        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const {change, locale, show, enable} = this.props;

        if(!enable) return null;

        return (
            <>
                <button type='button' onClick={() => change(locale)}>
                    {locale}
                </button>
                {show && <p>Hello</p>}
            </>
        );
    }
}

export default Button;