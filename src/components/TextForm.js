import { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
        if (event.target.value.length>1000) {
        props.showAlert('You Should Not Put So Much Content at Once!', 'danger');
        }
    }
    const handleOnClickToUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to Uppercase Successfuly!', 'success');
    }
    const handleOnClickToLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to Lowercase Successfuly!', 'success');
    }
    const handleOnClickToCamleCase = () => {
        let textArr = text.toLowerCase().trim().split(" ").filter(elm => elm !== '');
        let finalArr = [];
        textArr.forEach((elm, index) => {
            finalArr.push(textArr[index].charAt(0).toUpperCase() + textArr[index].substring(1, textArr[index].length));
        });
        let finalString = '';
        finalArr.forEach(elm => {
            finalString += elm + ' '
        });
        setText(finalString);
        props.showAlert('Converted to Camlecase Successfuly!', 'success');
    }
    return(
        <>
            <div className="mb-3">
                <label htmlFor="paraInputBox" className="form-label">Example textarea</label>
                <textarea onChange={handleOnChange} value={text} className="form-control" id="paraInputBox" rows="17" style={{ height: '200px', background: `${props.mode === 'light' ? 'white' : props.colorTheme.secondary}`, color: `${props.mode==='light'?'black':props.colorTheme.color}`, border: `${props.mode==='light'?'1px solid lightgrey':props.colorTheme.secondary}`}}/>
                <button onClick={handleOnClickToUpperCase} className={`btn btn-primary my-3 mx-1`} style={{background: `${props.mode==='light'?'#0d6efd':props.colorTheme.secondary}`, border: 'none', color: `${props.mode==='light'?'white':props.colorTheme.color}`, border: `${props.mode==='light'?'1px solid lightgrey':props.colorTheme.secondary}`}}>Conver to Upper Case</button>
                <button onClick={handleOnClickToLowerCase} className={`btn btn-primary my-3 mx-1`} style={{background: `${props.mode==='light'?'#0d6efd':props.colorTheme.secondary}`, border: 'none', color: `${props.mode==='light'?'white':props.colorTheme.color}`, border: `${props.mode==='light'?'1px solid lightgrey':props.colorTheme.secondary}`}}>Conver to Lower Case</button>
                <button onClick={handleOnClickToCamleCase} className={`btn btn-primary my-3 mx-1`} style={{background: `${props.mode==='light'?'#0d6efd':props.colorTheme.secondary}`, border: 'none', color: `${props.mode==='light'?'white':props.colorTheme.color}`, border: `${props.mode==='light'?'1px solid lightgrey':props.colorTheme.secondary}`}}>Conver to Camle Case</button>
            </div>
            <div className="preview">
                <h2>Preview</h2>
                <p>{text===''?'Please wrtie something in the textarea above to see the preview here':text}</p>
                <p><b>Words:</b> {text === '' ? '0' : text.trim().split(" ").filter(elm => elm !== '').length},<b>Characters:</b> {text.length}</p>
                <p>It will take you <b>{0.008*text.trim().split(" ").filter(elm => elm !== '').length} Minutes</b> To read this</p>
            </div>
        </>
    )
}

export default TextForm;