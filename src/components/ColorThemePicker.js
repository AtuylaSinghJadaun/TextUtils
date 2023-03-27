import './ColorThemePicker.css'

const ColorThemePicker = (props) => {
    if (props.mode==='light') {
        
    }
    else {
        const colorTheme = [
            {
                name: 'black',
                primary: 'black',
                secondary: '#212529',
                color: 'white'
            },
            {
                name: 'green',
                primary: '#2E4F4F',
                secondary: '#0E8388',
                color: 'white'
            },
            {
                name: 'pink',
                primary: '#FFACAC',
                secondary: '#FFBFA9',
                color: 'black'
            },
            {
                name: 'blue',
                primary: '#0A2647',
                secondary: '#205295',
                color: 'white'
            },
            {
                name: 'red',
                primary: '#fe0000',
                secondary: '#ff5353',
                color: 'white'
            }
        ]
        const themeColorChanger = (event) => {
            props.colorThemeChange(colorTheme[Array.from(document.querySelectorAll('.themeColorPicker')).indexOf(event.target)]);
    
            const allLabels = Array.from(document.querySelectorAll('.labelStyle'))
            const focusLabel = allLabels[Array.from(document.querySelectorAll('.themeColorPicker')).indexOf(event.target)];
            allLabels.forEach((elm, index) => {
                elm.style.transform = 'scale(100%)';
            });
            focusLabel.style.transform = 'scale(120%)'
        }

        return (
            <div className="themeseContainer">
                <input onInput={themeColorChanger} type="radio" name="themeColorPicker" id="black" className="themeColorPicker"/>
                <label htmlFor="black" className='labelStyle black'></label>
                <input onInput={themeColorChanger} type="radio" name="themeColorPicker" id="green" className="themeColorPicker"/>
                <label htmlFor="green" className='labelStyle green'></label>
                <input onInput={themeColorChanger} type="radio" name="themeColorPicker" id="pink" className="themeColorPicker"/>
                <label htmlFor="pink" className='labelStyle pink'></label>
                <input onInput={themeColorChanger} type="radio" name="themeColorPicker" id="blue" className="themeColorPicker"/>
                <label htmlFor="blue" className='labelStyle blue'></label>
                <input onInput={themeColorChanger} type="radio" name="themeColorPicker" id="red" className="themeColorPicker"/>
                <label htmlFor="red" className='labelStyle red'></label>
            </div>
        )
    }
}

export default ColorThemePicker;