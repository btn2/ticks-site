import './SheetItem.css';
function SheetItem(props) {
    let time = new Date(props.data.time)
    let timestring = time.getDate().toString() + '/' + (time.getMonth()+1).toString() + '/' + time.getFullYear().toString()

    return (
        <div className="SheetItem">
            <div className="Name">{props.data.nickname}</div>
            <div className="Quote">{props.data.quote}</div>
            <div className="Time">{timestring}</div>
        </div>
    )
    
}

export default SheetItem;