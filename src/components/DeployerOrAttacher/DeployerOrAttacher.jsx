import React from "react";

class DeployerOrAttacher extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button onClick={() => parent.selectDeployer()}>Deployer</button>
          <br />
          Set the wager, deploy the contract.
        </p>
        <p>
          <button onClick={() => parent.selectAttacher()}>Attacher</button>
          <br />
          Attach to the Deployer's contract.
        </p>
      </div>
    );
  }
}

export default DeployerOrAttacher;
