import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m102.jpg";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src={MikePhoto}
						style={{ width: "150px", height: "150px" }}
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" onClick={() => props.onEdit()}>
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.infoContact.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.infoContact.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.infoContact.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.infoContact.email}</span>
				</div>
			</div>
		</li>
	);
};

ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	infoContact: PropTypes.object,
	onEdit: PropTypes.func
};

ContactCard.defaultProps = {
	onDelete: null,
	onEdit: null
};
