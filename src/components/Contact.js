import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component{
    render(){
        return (
            <div>
                Đây là trang liên hệ <br/>
                <button type="button" className="btn btn-default">Allow</button>
                <br/>
                <button type="button" className="btn btn-primary">Deny</button>
                <Prompt
                    when={true}
                    message={'hello'}
                ></Prompt>
            </div>
        );
    }
}

export default Contact;