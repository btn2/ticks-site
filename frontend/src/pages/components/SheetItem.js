function SheetItem(props) {

    return (
        <div className="SheetItem">
            {props.data.nickname} {props.data.quote}
        </div>
    )
    
}

export default SheetItem;