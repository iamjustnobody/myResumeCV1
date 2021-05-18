let themeColor=document.querySelectorAll('.theme span');
        themeColor.forEach((_color,_index)=>_color.addEventListener('click',()=>{
            let background=_color.style.background;
            
            if(_index+1==themeColor.length){
                document.querySelector('.container .resume').style.background='#fff';
                document.querySelector('.container .resume').style.borderRadius='0';
                document.querySelector('.container .resume .left-panel').style.background='#003147';
                document.querySelector('.container .resume .left-panel').style.borderRadius='0';
                document.querySelector('.resume .left-panel .profileTxt').style.color='#fff'
                document.querySelectorAll('.resume .left-panel .title').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.resume .left-panel .text').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.resume .left-panel h4').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.left-panel .contact-info.education h5').forEach(el=>el.style.color='#03a9f4')
                document.querySelectorAll('.left-panel .contact-info.language .percentage').forEach(el=>el.style.background='#081921')
                document.querySelectorAll('.left-panel .contact-info.language .percentage div').forEach(el=>el.style.background='#03a9f4')
                document.querySelectorAll('.left-panel .contact-info.social ul li .text .network').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.left-panel .contact-info.social ul li .text a span').forEach(el=>el.style.color='#03a9f4')
                //document.querySelectorAll('.left-panel .social .text a:hover').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.left-panel .social .text a').forEach(el=>el.addEventListener("mouseover",()=>{
                    //el.style.color='#fff';console.log('hehela',el.style.color);
                    document.querySelectorAll('.left-panel .social .text a span').forEach(_el=>_el.style.color='#fff')}))
                document.querySelectorAll('.right-dashboard .about .title2').forEach(el=>el.style.color='#003147')
                document.querySelector('.right-dashboard .about .statement').style.color='#333'
                document.querySelectorAll('.right-dashboard .about .opex-box .year-company h5').forEach(el=>el.style.color='#848c90')
                document.querySelectorAll('.right-dashboard .about .opex-box .text h4').forEach(el=>el.style.color='#2a7da2')
                document.querySelectorAll('.right-dashboard .skills .opex-box h4').forEach(el=>el.style.color='#848c99')
                document.querySelectorAll('.right-dashboard .skills .opex-box .percentage').forEach(el=>el.style.background='#f0f0f0')
                document.querySelectorAll('.right-dashboard .skills .opex-box .percentage div').forEach(el=>el.style.background='#03a9f4')

            }else{
                document.querySelector('.container .resume').style.background='linear-gradient(to right bottom,rgba(255,255,255,0.3),rgba(255,255,255,.1))';
                document.querySelector('.container .resume').style.borderRadius='2rem';
                document.querySelector('.container .resume .left-panel').style.background='linear-gradient(to right bottom,rgba(255,255,255,0.2),rgba(255,255,255,.1))';
                document.querySelector('.container .resume .left-panel').style.borderRadius='2rem';
                if(_index==0){
                document.querySelector('.resume .left-panel .profileTxt').style.color='#8c0f35'//'#f64177'
                document.querySelectorAll('.resume .left-panel .title').forEach(el=>el.style.color='#8c0f35')
                document.querySelectorAll('.resume .left-panel .text').forEach(el=>el.style.color='#a31843')
                document.querySelectorAll('.resume .left-panel h4').forEach(el=>el.style.color='#a31843')
                document.querySelectorAll('.left-panel .contact-info.education h5').forEach(el=>el.style.color="#4a4a49")//'#e3299f' d#8c29e3
                document.querySelectorAll('.left-panel .contact-info.language .percentage').forEach(el=>el.style.background='#f27ca7')
                document.querySelectorAll('.left-panel .contact-info.language .percentage div').forEach(el=>el.style.background='#cc185b')//#b3a89d
                document.querySelectorAll('.left-panel .contact-info.social ul li .text .network').forEach(el=>el.style.color='#a31843')
                document.querySelectorAll('.left-panel .contact-info.social ul li .text a span').forEach(el=>el.style.color='#4a4a49')
                document.querySelectorAll('.left-panel .social .text a').forEach((el,i)=>{
                    el.addEventListener("mouseover",()=>{
                    document.querySelectorAll('.left-panel .social .text a span')[i].style.color='#fff'});
                    el.addEventListener("mouseout",()=>{
                        document.querySelectorAll('.left-panel .social .text a span')[i].style.color='#4a4a49'});
                })
                document.querySelectorAll('.right-dashboard .about .title2').forEach(el=>el.style.color='#c72c51')//#db325b#f6416c ok//#f21d44//#f6416c
                document.querySelector('.right-dashboard .about .statement').style.color='#333'
                //document.querySelector('.right-dashboard .about .opex-box .year-company h5').style.color='#848c90'
                document.querySelectorAll('.right-dashboard .about .opex-box .text h4').forEach(el=>el.style.color='#f6416c')//#f64195 for index4
                document.querySelectorAll('.right-dashboard .skills .opex-box h4').forEach(el=>el.style.color='#4a4a49')
                document.querySelectorAll('.right-dashboard .skills .opex-box .percentage').forEach(el=>el.style.background='#e897aa')
                document.querySelectorAll('.right-dashboard .skills .opex-box .percentage div').forEach(el=>el.style.background='#f64177')//#f6416c ok

                }else if(_index==1){

                }else if(_index==2){

                }else if(_index==3){

                }else if(_index==4){

                }else if(_index==5){

                }
            }
            if(_index+1==themeColor.length-1){
                document.querySelector('body').style.background=background
                document.querySelector('body').style.animation='hue 10s infinite alternate'
            }
            else{
                document.querySelector('body').style.background=background
                document.querySelector('body').style.animation='none'
            }
            var styleElem1=document.head.appendChild(document.createElement("style"))
            var styleElem2=document.head.appendChild(document.createElement("style"))
            var styleElem3=document.head.appendChild(document.createElement("style"))
            var styleElem4=document.head.appendChild(document.createElement("style"))
            var styleElem5=document.head.appendChild(document.createElement("style"))
            if(_index==2||_index==6){
                styleElem1.innerHTML="#web:before{background:url('./images/btn-bg2.png')}"
                styleElem2.innerHTML="#github:before{background:url('./images/btn-bg2.png')}"
                styleElem3.innerHTML="#fb:before{background:url('./images/btn-bg2.png')}"
                styleElem4.innerHTML="#linkedin:before{background:url('./images/btn-bg2.png')}"
                styleElem5.innerHTML="#twitter:before{background:url('./images/btn-bg2.png')}"
            }else {
                styleElem2.innerHTML="#github:before{background:url('./images/btn-bg1.png')}"
            }
        }))

        var type=new Typed('.typing-text',{
            strings:["","Electrical / Electronic Engineer","Nuclear Fuel Route Safety Case Engineer","interested in programming","applying for SWE job"],
            typeSpeed:120,
            loop:true
        })