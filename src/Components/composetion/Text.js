export default function Text({addEmoji, addBracket}) {
    let text = 'I am Js Learn';

    if (addEmoji) {
        text = addEmoji(text, ':heart');
    }

    if (addBracket) {
        text = addBracket(text);
    }

    return <div>{text}</div>
}