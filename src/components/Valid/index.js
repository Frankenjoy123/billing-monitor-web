import React, {Component} from 'react';
import './UserLogo.scss';

export default class Valid extends Component{

  constructor(props){
    super(props);
    this.state = {result:""}
    this.valid = this.valid.bind(this);
  }

  valid(){

    this.get(`/billing/client/validate?pc=${this.pc.value}&service=${this.service.value}`)
        .then(res => {
          let tmp = res;
          console.log(tmp);
          this.setState({result: tmp})
        })
  }

  get(url){
        return new Promise(function (resolve, reject){
            fetch(url, {
                credentials: 'include',
                method: 'GET'
            }).then(res=>{
                if(res.status===200){
                  resolve(res.text());
                }else{
                    reject(res);
                }
            }).catch(e=>{
                reject(e);
            });
        });
    }


  render(){
    return(
        <div>
          <h2>Valid验证是否有效</h2>
          {/*<form method="get">*/}
            合作方标志pc: <input type="text" name="pc" ref={ref => this.pc=ref}/>
            服务service: <input type="text" name="service"  ref={ref => this.service = ref}/>
          <button  value="Submit" onClick={this.valid}>提交</button>

          <div>{this.state.result}</div>
          {/*</form>*/}
        </div>
    )

  }
}

Valid.defaultProps = {
  size: 'normal',
  username: '',
  showPop: true
};