import React from "react";

class FundAccount extends React.Component {
  render() {
    const { bal, standardUnit, defaultFundAmount, parent } = this.props;
    const amount = (this.state || {}).amount || defaultFundAmount;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type="number"
          placeholder={defaultFundAmount}
          onChange={(e) => this.setState({ amount: e.currentTarget.value })}
        />
        <button onClick={() => parent.fundAccount(amount)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

export default FundAccount;
