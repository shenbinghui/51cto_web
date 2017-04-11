// $(function(){
// 	var webSiteBar = $('#web_bar');
//     var webSiteBarUl = $('#web_bar ul');
// 	webSiteBar.mouseleave(function(){
//         // webSiteBarUl.
//         console.log("mouseleave");
// 	});

// 	webSiteBar.mouseenter(function(){
//          console.log("mouseenter");
// 	});
// })
window.onload = function() {
    var vm = new Vue({
        el: "#index",
        data: {
            title: "中 国 最 大 的 IT 技 能 学 习 平 台",
            info: { login: '登陆', reg: '注册', shop: '购物车', school: '学院APP', story: '学员故事' },
            nav: { title: '网站导航', pro: '微职位', video: '视频课程', company: '企业学习', class: '申请开课', cto: '51CTO主站', train: 'CTO训练营', WTO: 'WTO峰会', SALO: '百城沙龙' },
            togleBar:'hide',
            togleClass:"hide"
            
        },
        methods: {
            showNavBar: function() {
                // console.log('show');
                this.togleBar='show';
            },
            hideNavBar: function(){
            	// console.log('hide');
            	this.togleBar='hide';
            },

            showClass: function() {
                // console.log('show');
                this.togleClass='show';
            },
            hideClass: function(){
            	// console.log('hide');
            	this.togleClass='hide';
            }
        }
    });


}
