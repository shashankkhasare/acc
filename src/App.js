import React from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default class App extends React.Component {
  state = {
    accounts: [],
    columns: [
      "Account No",
      "Date",
      "Transaction Details",
      "Value Date",
      "Withdrawal AMT",
      "Deposit AMT",
      "Balance AMT"
    ]
  };

  componentDidMount() {
    axios.get(`http://starlord.hackerearth.com/bankAccount`).then(res => {
      const accounts = res.data;
      console.log(res);
      console.log(accounts);
      this.setState({ accounts });
    });
  }

  render() {
    return (
      <MaterialTable
        title="Editable Example"
        columns={this.state.columns}
        data={this.state.accounts}
      />
    );
  }
}
