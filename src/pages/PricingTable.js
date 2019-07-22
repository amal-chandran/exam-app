import React, { Component } from "react";
import classnames from "classnames";
import PricingBox from "./../components/PricingBox";
import basis_data from "./../database_moc/basis_data";
import website_data from "./../database_moc/website_data";

export default class PricingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseSwitch: "user"
    };
  }

  handleSwitch = base_name => e => {
    this.setState({ baseSwitch: base_name });
  };

  render() {
    const baseItems = basis_data[this.state.baseSwitch]["items"];
    const baseHead = basis_data[this.state.baseSwitch]["heading"];
    return (
      <div className="container pt-2">
        <div className="p-3 px-4 h4 mb-3 bg-white border rounded-border shadow-sm">
          Test Packages
        </div>
        <div className="text-center mb-3">
          <div className="switch-container">
            <button
              onClick={this.handleSwitch("user")}
              className={classnames({
                active: this.state.baseSwitch === "user"
              })}
            >
              User Base
            </button>
            <button
              onClick={this.handleSwitch("test")}
              className={classnames({
                active: this.state.baseSwitch === "test"
              })}
            >
              Test Base
            </button>
          </div>
        </div>
        <div className=" bg-white p-3 border rounded-border shadow-sm">
          <h5 className="text-center pt-2">{baseHead}</h5>
          <div className="row mx-3 my-2">
            {baseItems.map((item, i) => (
              <PricingBox key={i} type="base" item={item} />
            ))}
          </div>
        </div>
        <div className="mt-4 bg-white p-3 border rounded-border shadow-sm">
          <h5 className="text-center pt-2">WEBSITE</h5>
          <div className="row mx-3 my-2">
            {website_data.map((website, i) => (
              <PricingBox key={i} type="website" item={website} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
