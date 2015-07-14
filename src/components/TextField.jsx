"use strict";

import React from "react"; // eslint-disable-line no-unused-vars
import R from "ramda";
import {
    component,
    mergeImplicitProps,
    buildClassName
} from "../lib";

export default component(props => {
    const {
        name,
        label,
        floating,
        pattern,
        patternErrorMessage,
        style
    } = props;

    const className = buildClassName({
        "mdl-textfield": true,
        "mdl-js-textfield": true,
        "mdl-textfield--floating-label": R.contains(floating, ["true", true])
    });

    return <div className={className} style={style}>
        <input {...props} className="mdl-textfield__input" name={name} type="text"/>
        <label children={label} className="mdl-textfield__label" for={name}/>
        { pattern && <span className="mdl-textfield__error"
            children={patternErrorMessage} /> }
    </div>;

});
