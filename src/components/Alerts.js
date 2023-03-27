const Alerts = (props) => {
    const capitalize = (word) => {
        let lowerWord = word.toLowerCase();
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }
    if (props.alert === null) {
        
    } else {
        return (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{`${props.alert.type === 'primary' ? 'Info' : capitalize(props.alert.type)}`}</strong>: {props.alert.msg}
                </div>
        )
    }
}

export default Alerts;
