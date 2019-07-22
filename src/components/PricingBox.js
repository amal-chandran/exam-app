import React, { Component } from "react";
import classnames from "classnames";

export default class PricingBox extends Component {
  static defaultProps = {
    type: "base"
  };

  lineBreaker = text => text.split("\n").map(lineText => <div>{lineText}</div>);

  render() {
    const { item, type } = this.props;

    return (
      <div className="col-3 px-0">
        <div
          className={classnames(
            { "py-3": type == "base" },
            { "pt-3": type == "website" },
            "princing-table-item",
            "m-3",
            "rounded-border",
            "shadow",
            "text-center"
          )}
        >
          <h6 style={{ minHeight: "40px" }} className="text-uppercase mb-3">
            {this.lineBreaker(item.name)}
          </h6>
          {type == "base" && (
            <div className="rate-title py-3 mb-3 font-weight-bold bg-white">
              {this.lineBreaker(item.rateTitle)}
            </div>
          )}
          <div className="details mb-3">{this.lineBreaker(item.details)}</div>

          {type == "website" ? (
            <>
              <div className="mx-3 text-right">
                <button
                  style={{ borderRadius: "2rem" }}
                  className="start-item  btn btn-light px-4"
                >
                  View
                </button>
              </div>
              <div
                style={{
                  borderBottomRightRadius: "7px",
                  borderBottomLeftRadius: "7px",
                  background: "rgba(255,255,255,.4)"
                }}
                className="rate-title py-2 m-2 font-weight-bold"
              >
                {item.rateTitle}
              </div>
            </>
          ) : (
            <div className="mx-3">
              <button
                style={{ borderRadius: "2rem" }}
                className="start-item font-weight-bold  btn btn-light bg-white w-100"
              >
                START
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
