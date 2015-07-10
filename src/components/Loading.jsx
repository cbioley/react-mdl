"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";


const ProgressBar = component("ProgressBar", props => {
    const {
        progress,
        buffer
    } = props;

    const bufferWidth = (buffer === undefined) ? "100" : buffer;

    const children = [
        <div key="0" className="bar bar1 progressbar" style={{
            width: progress + "%"
        }} />,
        <div key="1" className="bar bar2 bufferbar" style={{
            width: bufferWidth + "%"
        }} />,
        <div key="2" className="bar bar3 auxbar" style={{
            width: (100 - bufferWidth) + "%"
        }} />
    ];

    const className = buildClassName({
        "mdl-progress": true
    });

    return React.createElement("div", mergeImplicitProps(props, {
        className
    }), children);
}, false);


const IndeterminateProgressBar = component("IndeterminateProgressBar",
    props => {
        const className = buildClassName({
            "mdl-progress": true,
            "mdl-js-progress": true,
            "mdl-progress__indeterminate": true
        });

        return React.createElement("div", mergeImplicitProps(props, {
            className
        }));
    }
);


const Spinner = component("Spinner", props => {
    const {
        color
    } = props;

    const className = buildClassName({
        "mdl-spinner": true,
        "mdl-js-spinner": true,
        "is-active": true,
        "mdl-spinner--single-color": color === "primary"
    });

    return React.createElement("div", mergeImplicitProps(props, {
        className,
        "data-prevent-upgrade": true
    }));
});

export {
    ProgressBar,
    IndeterminateProgressBar,
    Spinner
};
