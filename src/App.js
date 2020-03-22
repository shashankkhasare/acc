import React from "react";
import axios from "axios";
import MaterialTable from "material-table";

class App extends React.Component {
  state = {
    accounts: [],
    columns: [
      { title: "Account No", field: "Account No" },
      { title: "Date", field: "Date" },
      { title: "Transaction Details", field: "Transaction Details" },
      { title: "Value Date", field: "Value Date" },
      { title: "Withdrawal AMT", field: "Withdrawal AMT" },
      { title: "Deposit AMT", field: "Deposit AMT" },
      { title: "Balance AMT", field: "Balance AMT" }
    ]
  };

  componentDidMount() {
    axios.get(`http://starlord.hackerearth.com/bankAccount`).then(res => {
      const accounts = res.data;
      this.setState({ ...this.state, accounts });
    });
  }

  render() {
    return (
      <MaterialTable
        title="Accounts table"
        columns={this.state.columns}
        data={this.state.accounts}
      />
    );
  }
}

export default App;
