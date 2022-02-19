import React, { Component,Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alerts extends Component {

    componentDidUpdate(prevProps){
        const {message,alert,error} = this.props;
        console.log(" hhllllfk ",error,prevProps)
        if(error !== prevProps.error){
            if(error?.msg?.non_field_errors) alert.error(`Detail: ${error?.msg?.non_field_errors.join()}`)
            if(error?.msg?.username) alert.error(`Username: ${error?.msg?.username.join()}`)
            if(error?.msg?.password) alert.error(`Password: ${error?.msg?.password.join()}`)
        }

        if(message !== prevProps.message){
          if(message.msg.addLead) alert.success(message.msg.addLead)
          if(message.msg.updateLead) alert.success(message.msg.updateLead)
          if(message.msg.deleteLead) alert.success(message.msg.deleteLead)
        }
    }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
    message:state.messages,
    error:state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts));
