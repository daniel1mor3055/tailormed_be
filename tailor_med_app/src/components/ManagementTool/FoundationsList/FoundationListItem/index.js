import React from "react";
import PropTypes from "prop-types";

const FoundationListItem = ({name, foundationData}) => {
    return (
        <li className={'FoundationListItem'}>
            <h3>{name}</h3>
            {Object.keys(foundationData).map((foundationDataProperty, index) => {
                return (
                    <div key={index}>
                        <h4>{foundationDataProperty}</h4>
                        {Array.isArray(foundationData[foundationDataProperty]) ?
                            <ul>
                                {foundationData[foundationDataProperty].map((treatment, index) => <li
                                    key={index}>{treatment}</li>)}
                            </ul>
                            : <p>{foundationData[foundationDataProperty]}</p>}
                    </div>
                );
            })}
        </li>
    );
};

FoundationListItem.propTypes = {
    name: PropTypes.string.isRequired,
    foundationData: PropTypes.object.isRequired,
};


export default FoundationListItem;