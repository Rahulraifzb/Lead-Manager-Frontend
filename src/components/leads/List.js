import React, { useEffect } from "react";
import { Table } from "reactstrap";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { connect, useDispatch } from "react-redux";
import { getLeads,deleteLead } from "../../actions/leads";
import {SELECT_LEAD} from "../../actions/types"

const url = "http://127.0.0.1:9000"

const List = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    props.getLeads()
  },[])

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {console.log(props.leads)}
        {props?.leads?.map((lead,index) => (
          <tr key={index}>
            <td>{lead.id}</td>
            <td>
              <img src={`${url}${lead.image_path}`} alt={lead?.name} width="36px" height="36px" style={{objectFit:"contain"}} />&nbsp;&nbsp;
              <span>{lead.name}</span>
            </td>
            <td>{lead.email}</td>
            <td>{lead.message}</td>
            <td>
              <span
                className="text-primary"
                style={{ marginRight: "18px", cursor: "pointer" }}
                onClick={() => dispatch({type:SELECT_LEAD,payload:lead.id})}
              >
                <FaRegEdit color="lime" />
              </span>
              <span
                className="text-danger cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => props.deleteLead(lead.id)}
              >
                <FiTrash2 />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    leads: state.leads.leads,
  };
};

export default connect(mapStateToProps, { getLeads,deleteLead })(List);
