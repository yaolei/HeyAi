import React,{ useState }  from 'react';
import { Affix, Button, Carousel } from 'antd';
import './css/bootstrap.min.css'
import '../tmp/css/header.less'
import beianIcon from "../tmp/images/beian.png";

export default function Header() {
    const [container, setContainer] = useState(null);
        return (
            <div>
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
          <div className="container">
               <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span className="icon icon-bar"></span>
                         <span className="icon icon-bar"></span>
                         <span className="icon icon-bar"></span>
                    </button>

                    <a href="index.html" className="navbar-brand">React 俱乐部</a>
               </div>

               <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                         <li><a href="#home" className="smoothScroll">首页</a></li>
                         <li><a href="#feature" className="smoothScroll">未来</a></li>
                         <li><a href="#about" className="smoothScroll">关于我们</a></li>
                         <li><a href="#pricing" className="smoothScroll">讨论</a></li>
                         <li><a href="#contact" className="smoothScroll">内容</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                         <li><a href="#">欢迎 - <span>游客</span></a></li>
                    </ul>
               </div>
          </div>
         </section>

            <section id="home" data-stellar-background-ratio="0.5" style={{backgroundPosition: `50% 25px` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-6 col-sm-12">
                            <div className="home-info">
                                <h3>前端发开者的乐园</h3>
                                <h1>部分功能建设中，敬请期待....</h1>
                                <form action="" method="get" className="online-form">
                                    {/* <input type="email" name="email" className="form-control" placeholder="Enter your email" required="">
                                    </input>
                                    <button type="submit" className="form-control">Get started</button> */}
                                </form>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
            <section  className="navbar custom-navbar navbar-fixed-bottom" role="navigation">
                <div className="container">
                    <div className="navbar-header customFooter">
                    <div>Copyright © 1996 - 2018 Evan, All Rights Reserved</div>
                    <div style={{paddingLeft:'10rem'}}><a href="http://beian.miit.gov.cn">(辽ICP备19006292号-1)</a></div>
                        <div style={{width :'300', margin: '0 auto', padding:'20 0'}}>
                            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21021102000798" style={{display:'inline-block', textDecoration:'none', height:'20px',lineHeight:'20px'}}>
                            <img src={beianIcon} style={{float:'left'}}/>
                            <div style={{float:'left', height:'20px', lineHeight:'20px', margin: '0px 0px 0px 5px', color:'#939393'}}>辽公网安备 21021102000798号</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )
}