import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './index.scss';
import '../../util/layer.js'
const ImgUrl = './static/images/index/';   // img图片路径
import axios from 'axios'
class Home extends Component {
  constructor(props) {

    super(props);
    this.state = {
      swipeArr: [
        {type: 'justin', class: 'cell_justin', intro: '美籍华裔天才大提琴手',name: '俞隽', age: '11岁',
          imgArr: ['justin_01.jpg', 'justin_02.jpg', 'justin_03.jpg']
        },
        {type: 'nuo', class: 'cell_nuo', intro: '才艺小美女', name: '诺诺', age: '5岁半',
          imgArr: ['nuo_01.jpg', 'nuo_02.jpg', 'nuo_03.jpg']
        }
      ]
    }
  }

  urlClick() {
    console.log(this.props.history);
    // 判断客户端版本进行比较
    let num = navigator.userAgent.indexOf('Amaze');
    let str = navigator.userAgent.substr(num-0+6,6).split('.');
    var isNew = false;
    for (var i = 0; i < str.length; i++) {
      if (str[0] > 1) {
        isNew = true;
        break;
      } else {
        if (str[1] > 2) {
          isNew = true;
          break;
        } else if (str[2] >= 4){
          isNew = true;
          break;
        }
      }
    }
    if (isNew) {
      this.props.history.push({
        pathname: '/pay',
        state: { isTop: true }
      });
    } else {
      layer.open({
        content: '请升级至最新版本（1.2.4及以上），通过点击开屏广告定制您的私人APP'
        , btn: '我知道了'
        , time: 3
      });
    }
  }

  render() {
	  axios.get('https://api.leappmusic.cc/common/h5_stats?id=22')
    return (
      <div className='index-container'>
        <img src={`${ImgUrl}expose-h5.jpg`} />
        <div className='index-padding'>
          <img src={`${ImgUrl}expose_01.jpg`} />
        </div>
        <div className='index-txt'>
          <p><b>思清音乐™</b>是由国际著名小提琴音乐家吕思清先生创办的音乐教育科技公司，通过组织精英师资力量，共同普及儿童音乐教育，发掘和培养具有音乐天赋的优秀学生，并向国内外高等音乐院校及一流高等学府输送人才。</p>
          <p><b>思清音乐™</b>希望孩子们可以通过Amaze+记录成长的精彩瞬间和点滴回忆，并充分展现自己的艺术天赋。同时家长可以通过思清音乐拥有的独特大师资源以及优质教育内容来为孩子赢得最终通往世界名校的入场券，开启精英人生。</p>
          <p className="intro">思清音乐公司简介：<br/>
            <a href="http://edu.leappmusic.com/home.html">http://edu.leappmusic.com/home.html</a>
          </p>
        </div>
        <div className='index-self'>
          <img src={`${ImgUrl}expose_02.jpg`} />
        </div>
        {
          this.state.swipeArr.map(function(item, key) {
            return (
              <SwipeItem key={key} data={item}/>
            )
          })
        }
        <div className='index-padding1'>
          <div className='index-price'>
            <div className='index-head'></div>
            <p>Amaze+ 极致畅享版</p>
            <h2>尽情畅享，仅需<i> 99元</i></h2>
          </div>
          <div className='index-intro'>
            <p>这是为您单独定制开发的属于您个人的私人手机应用，您可以将您的Amaze+分享给亲朋好友让他们下载成为您私人APP的用户及粉丝，也可以委托我们帮您在各大安卓应用商店及苹果应用商店上线发布，让更多人下载访问。除此之外您还将享有：</p>
            <ul>
              <li>1. 支持1080p超高清视频展示。</li>
              <li>2. 一键制作专属相册与炫酷专辑，随时随地分享。</li>
              <li>3. 无限畅享2T超大存储空间</li>
              <li>4. 永久享受更新升级服务，持续为您优化极致体验。后期将陆续增加音乐相册、礼物系统、奖励商城、积分体系、连线聊天等实用功能，还有更多神秘功能等待着您！</li>
            </ul>
          </div>
          <h4 className='title'>现在就为你的孩子定制一个Amaze+吧！</h4>
          <div className='btn-jump' onClick={()=>this.urlClick()}>立即定制</div>
        </div>
      </div>
    );
  }
}

// swipe滑动组件
class SwipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullState: false,
      mySwiper: ''
    };
  }
  componentDidMount() {
    var mySwiper = new Swiper(`.${this.props.data.type}`, {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        observer: true,
        observeParents:true,
        slidesOffsetBefore : 20,
        slidesOffsetAfter : 20,
        paginationClickable: true,
        spaceBetween: 10
    });
  }

  // 点击图片打开全屏显示轮播图
  fullScreenShow() {
    this.setState({
      fullState: true
    });
  }

  fullScreenHide() {
    this.setState({
      fullState: false
    });
  }

  render() {
    let {data} = this.props;


    return (
      <div className='swipe-con'>
        <div className='cell'>
          <div className={`cell_hd ${data.class}`}></div>
          <div className='cell_bd'>
            <h3>{data.intro}</h3>
            <p>{data.name}<i>{data.age}</i></p>
          </div>
        </div>
        <div className={this.state.fullState && 'swipe-box'}>
          <div className={`swiper-container ${data.type}`}>
            <div className="swiper-wrapper" onClick={() => this.fullScreenShow()}>
              {
                data.imgArr.map(function(item, key) {
                  return (
                    <div className="swiper-slide" key={key}>
                      <img src={`${ImgUrl}${item}`} />
                    </div>
                  );
                })
              }
            </div>
            <div className="swiper-pagination"></div>
            <div className='btn-close' onClick={() => this.fullScreenHide()}><i>完成</i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
