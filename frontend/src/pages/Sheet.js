import { Component } from "react"
import SheetItem from "./components/SheetItem";
import config from "../config.json"
import "./Sheet.css"
export class Sheet extends Component {
    constructor() {
        super();
        this.state = { quotedata: {} };
    }

    componentDidMount() {
        fetch(`${config.backendurl}/getquotes`)
        .then(res => res.json())
        .then(data => this.setState({ quotedata: data }))
    }

    render() {
        let items = [];
        for (let i = 0; i < this.state.quotedata.length; i++) {
            items.push(<SheetItem key={i} data={this.state.quotedata[i]} />)
        }
        return(
            <div>
                <div className="header">monkopppeople shitbag wall</div>
                {items}
            </div>
        )
    }
}


export default Sheet;
