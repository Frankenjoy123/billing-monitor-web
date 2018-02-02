import {observable} from 'mobx';
import {get, post} from '../tools/Http';
import User from "../models/User";
import {warning, error} from "../tools/Toasty";

class CommonStore{
  @observable userInfo = new User();
  @observable environment = ' ';
  @observable userList = [];
  @observable username = "";
  @observable password = "";
  @observable currentPage = 0; // 1. 任务列表 2. 任务详情表， 3. 我的任务列表



  getUserInfo(){
    get('/api/auth/current_user').then(data=>{
      if(data.code===10100){
        this.userInfo = data.data;
      }else{
        warning("获取用户信息失败！"+data.msg);
      }
    },err=>{
      if(err.status===403){
        warning("您没有操作权限！")
      }else{
        error('服务器错误！');
      }
    });
    this.getUserList();
    setTimeout(()=>{
      this.getUserInfo();
    },1000*60*10);
  }

  getUserList(){
    get('/api/staff/all').then(data=>{
      if(data.code===10100){
        this.userList = data.data;
      }
    })
  }

  getProjectMembers(id){
    return get(`/api/project/${id}/staffs`).then(data=>data, err=>err);
  }

  setUsername(e){
    this.username = e.target.value;
  }

  setPassword(e){
    this.password = e.target.value;
  }

  login(){
    let param = {
      username: this.username,
      password: this.password
    };
    return post('/api/auth/login', param).then(data=>data, err=>err);
  }

  logout(){
    return get('/api/auth/logout').then(data=>data, err=>err);
  }
}

export default new CommonStore();