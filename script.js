let themeColor=document.querySelectorAll('.theme span');
        themeColor.forEach((_color,_index)=>_color.addEventListener('click',()=>{
            let background=_color.style.background;
            
            if(_index==0||_index==3){//if(_index+1==themeColor.length){
                document.querySelector('.container .resume').style.background='#fff';
                document.querySelector('.container .resume').style.borderRadius='0';
                document.querySelector('.container .resume .left-panel').style.background='#003147';
                document.querySelector('.container .resume .left-panel').style.borderRadius='0';
                document.querySelector('.resume .left-panel .profileTxt').style.color='#fff'
                document.querySelector('.resume .left-panel .profileTxt span').style.color='#fff'
                document.querySelector('.resume .left-panel .profileTxt .typing-text').style.color='#fff'
                document.querySelectorAll('.resume .left-panel .title').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.resume .left-panel .text').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.resume .left-panel h4').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.left-panel .contact-info.education h5').forEach(el=>el.style.color='#03a9f4')
                document.querySelectorAll('.left-panel .contact-info.language .percentage').forEach(el=>el.style.background='#081921')
                document.querySelectorAll('.left-panel .contact-info.language .percentage div').forEach(el=>el.style.background='#03a9f4')
                document.querySelectorAll('.left-panel .contact-info.social ul li .text .network').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.left-panel .contact-info.social ul li .text a span').forEach(el=>el.style.color='#03a9f4')
                //document.querySelectorAll('.left-panel .social .text a:hover').forEach(el=>el.style.color='#fff')
                document.querySelectorAll('.left-panel .social .text a').forEach((el,i)=>{
                    el.addEventListener("mouseover",()=>{
                    //el.style.color='#fff';console.log('hehela',el.style.color);
                        //document.querySelectorAll('.left-panel .social .text a span').forEach(_el=>_el.style.color='#fff')})
                        document.querySelectorAll('.left-panel .social .text a span')[i].style.color='#fff'})
                    el.addEventListener("mouseout",()=>{
                        //document.querySelectorAll('.left-panel .contact-info.social ul li .text a span').forEach(_el=>_el.style.color='#03a9f4')})
                        document.querySelectorAll('.left-panel .contact-info.social ul li .text a span')[i].style.color='#03a9f4'})
                    
                });
                document.querySelectorAll('.right-dashboard .about .title2').forEach(el=>el.style.color='#003147')
                document.querySelector('.right-dashboard .about .statement').style.color='#333'
                document.querySelectorAll('.right-dashboard .about .opex-box .year-company h5').forEach(el=>el.style.color='#848c90')
                document.querySelectorAll('.right-dashboard .about .opex-box .text h4').forEach(el=>el.style.color='#2a7da2')
                document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>el.style.color='#2a7da2')
                document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach((el,i)=>{
                    el.addEventListener('mouseover',()=>{
                        el.style.background='#03e9f4';el.style.color='#003147';//el.style.color='#050801'//el.style.background='#1eff45'
                        el.style.boxShadow="0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4";
                    })
                    /*el.removeEventListener('mouseover',()=>{
                        //el.style.background='none';el.style.color='#2a7da2';el.style.boxShadow=null;
                        el.style.background='#03e9f4';el.style.color='#050801'
                        el.style.boxShadow="0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4";
                    })*/
                   // el.addEventListener('mouseover',()=>{el.style.background='none';el.style.color='#2a7da2';el.style.boxShadow=null;})
                    el.addEventListener('mouseout',()=>{el.style.background='none';el.style.color='#2a7da2';el.style.boxShadow=null;})
                })
                document.querySelectorAll('.right-dashboard .skills .opex-box h4').forEach(el=>el.style.color='#848c99')
                document.querySelectorAll('.right-dashboard .skills .opex-box .percentage').forEach(el=>el.style.background='#f0f0f0')
                document.querySelectorAll('.right-dashboard .skills .opex-box .percentage div').forEach(el=>el.style.background='#03a9f4')
                if(_index==3){
                    document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>{
                        el.addEventListener('mouseover',()=>{
                            el.style.background='#03e9f4';el.style.color='#003147'
                            //el.style.boxShadow="0 0 5px #1eff45, 0 0 25px #1eff45, 0 0 50px #1eff45, 0 0 200px #2bd2ff";
                            el.style.boxShadow="0 0 5px #03a9f4, 0 0 25px #03a9f4, 0 0 50px #03a9f4, 0 0 200px #03a9f4";
                        })
                        el.addEventListener('mouseout',()=>{el.style.background=null;el.style.color='#2a7da2';el.style.boxShadow=null;})
                    
                    })
                }
            }else{
                document.querySelector('.container .resume').style.background='linear-gradient(to right bottom,rgba(255,255,255,0.3),rgba(255,255,255,.1))';
                document.querySelector('.container .resume').style.borderRadius='2rem';
                document.querySelector('.container .resume .left-panel').style.background='linear-gradient(to right bottom,rgba(255,255,255,0.2),rgba(255,255,255,.1))';
                document.querySelector('.container .resume .left-panel').style.borderRadius='2rem';
                if(_index==1||_index==2||_index==5){
                document.querySelector('.resume .left-panel .profileTxt').style.color='#8c0f35'//'#f64177'
                document.querySelector('.resume .left-panel .profileTxt span').style.color='#8c0f35'
                document.querySelector('.resume .left-panel .profileTxt .typing-text').style.color='#8c0f35'
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
                document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>el.style.color='#2a7da2')
                document.querySelectorAll('.right-dashboard .skills .opex-box h4').forEach(el=>el.style.color='#4a4a49')
                document.querySelectorAll('.right-dashboard .skills .opex-box .percentage').forEach(el=>el.style.background='#e897aa')
                document.querySelectorAll('.right-dashboard .skills .opex-box .percentage div').forEach(el=>el.style.background='#f64177')//#f6416c ok
                
                document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>{
                    el.addEventListener('mouseover',()=>{
                        el.style.background='#fc8fa8';//#f8cdd2 #faaebb #fc8fa8//'#ff9a9e';
                        //#ffbdc7 #ffc5cd
                       el.style.color='#f64177';//'#c72c51'//#f6416c #ff9a9e
                        el.style.boxShadow="0 0 5px #ff508c, 0 0 25px #ff508c, 0 0 50px #ff508c, 0 0 200px #ff508c"; //#fd7099 #ff508c #f6416c
                    })
                    el.addEventListener('mouseout',()=>{el.style.background=null;el.style.color='#2a7da2';el.style.boxShadow=null;})
                })

                }if(_index==2||_index==5){
                    document.querySelectorAll('.right-dashboard .skills .opex-box .percentage').forEach(el=>el.style.background='lightblue')
                    document.querySelectorAll('.right-dashboard .skills .opex-box .percentage div').forEach(el=>el.style.background='#2a7da2')//#f6416c ok
                    if(_index==5){
                        document.querySelectorAll('.right-dashboard .about .title2').forEach(el=>el.style.color='#fa4392')//#ff4f9b ok2
                        document.querySelectorAll('.right-dashboard .about .opex-box .text h4').forEach(el=>el.style.color='#ff4ffc')
                        
                        document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>{
                            el.addEventListener('mouseover',()=>{
                                el.style.background='#fac6e5';//#ffccd4';//'#f27ca7';//#efa2b4'; //to change
                                el.style.color='#cd5a91';//#ff3083 #ff80ce'//#ff4ffc #fa4392';//'#cc185b'//to be changed
                                //el.style.boxShadow="0 0 5px #ff4f8b, 0 0 25px #ff4f8b, 0 0 50px #ff4f8b, 0 0 200px #ff4f8b";//to be changed
                                //el.style.boxShadow="0 0 5px #fa4392, 0 0 25px #fa4392, 0 0 50px #fa4392, 0 0 200px #fa4392";
                                el.style.boxShadow="0 0 5px #ff4ffc, 0 0 25px #ff4ffc, 0 0 50px #ff4ffc, 0 0 200px #ff4ffc";
                            })
                            el.addEventListener('mouseout',()=>{el.style.background=null;el.style.color='#2a7da2';el.style.boxShadow=null;})
                        })
                    }
                    if(_index==2){
                        document.querySelectorAll('.right-dashboard .about .title2').forEach(el=>el.style.color='#fa23a0')//#ff4fcd//#fa43d8
                        document.querySelectorAll('.right-dashboard .about .opex-box .text h4').forEach(el=>el.style.color='#c44fff')//#c343fa ok2
                        document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>{
                            el.addEventListener('mouseover',()=>{
                                el.style.background='#f4e6fb';//'#eaccf6';//#efa2b4'; //to change
                                el.style.color='#a933dc';//#9f19d7//'#cc185b'//to be changed
                                el.style.boxShadow="0 0 5px #ca80e9, 0 0 25px #ca80e9, 0 0 50px #ca80e9, 0 0 200px #ca80e9";//#d499ed #ff4f8b
                            })
                            el.addEventListener('mouseout',()=>{el.style.background=null;el.style.color='#2a7da2';el.style.boxShadow=null;})
                        })
                    }

                }else if(_index==4){
                    document.querySelector('.resume .left-panel .profileTxt').style.color='#000'//#b5f020 #bdfa05 #f08820
                    document.querySelectorAll('.resume .left-panel .title').forEach(el=>el.style.color='#000')//#b5f020 #ff4d40
                    document.querySelectorAll('.resume .left-panel .text').forEach(el=>el.style.color='#fff')
                    document.querySelectorAll('.resume .left-panel h4').forEach(el=>el.style.color='#fff')
                    document.querySelectorAll('.left-panel .contact-info.education h5').forEach(el=>el.style.color='#61dbfb') //#7ffa05 ok
                    //document.querySelectorAll('.left-panel .contact-info.education h4').forEach(el=>el.style.color='#61dbfb')
                    //document.querySelectorAll('.left-panel .contact-info.education .location').forEach(el=>el.style.color='#61dbfb')
                    document.querySelectorAll('.left-panel .contact-info.language .percentage').forEach(el=>el.style.background='#fff') //#081921 ok
                    document.querySelectorAll('.left-panel .contact-info.language .percentage div').forEach(el=>el.style.background='#2fbafa')//#7ffa05 ok
                    document.querySelectorAll('.left-panel .contact-info.social ul li .text .network').forEach(el=>el.style.color='#fff')
                    document.querySelectorAll('.left-panel .contact-info.social ul li .text a span').forEach(el=>el.style.color='#61dbfb') //#7ffa05 ok
                    document.querySelectorAll('.left-panel .social .text a').forEach((el,i)=>{
                        el.addEventListener("mouseover",()=>{
                            document.querySelectorAll('.left-panel .social .text a span')[i].style.color='#fff'})
                        el.addEventListener("mouseout",()=>{
                            document.querySelectorAll('.left-panel .contact-info.social ul li .text a span')[i].style.color='#61dbfb'}) //#7ffa05 ok
                    });
                    document.querySelectorAll('.right-dashboard .about .title2').forEach(el=>el.style.color='#2fbafa')//#61dbfb//#7ffa05 ok //#ddfa05
                    document.querySelector('.right-dashboard .about .statement').style.color='#333'
                    document.querySelectorAll('.right-dashboard .about .opex-box .year-company h5').forEach(el=>el.style.color='#fff')
                    document.querySelectorAll('.right-dashboard .about .opex-box .text h4').forEach(el=>el.style.color='#61dbfb')//#8cfa05 ok//#b0fa05 #05fa4e #bdfa05 #05fa9c
                    document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>el.style.color='#61dbfb')//#8cfa05 ok //#b0fa05 #05fa4e #bdfa05 #05fa9c
                    document.querySelectorAll('.right-dashboard .skills .opex-box h4').forEach(el=>el.style.color='#fff')//#8cfa05 #b0fa05 #05fa4e #bdfa05 #05fa9c
                    document.querySelectorAll('.right-dashboard .skills .opex-box .percentage').forEach(el=>el.style.background='#f0f0f0')
                    document.querySelectorAll('.right-dashboard .skills .opex-box .percentage div').forEach(el=>el.style.background='#2fbafa') //#61dbfb//#8cfa05 ok
                    document.querySelector('.resume .left-panel .profileTxt span').style.color='#045885'//'#1c81fc'//'#1c81fc'//'#2a61f7'//'#2860fa'//'#0546f7'//'#7ffa05'
                    document.querySelector('.resume .left-panel .profileTxt .typing-text').style.color='#045885'//'#0a91ff'//'#1c81fc'//'#1c81fc'//'#2a61f7'//'#2860fa'//'#0546f7'//'#7ffa05'
                    /*document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>{
                        el.addEventListener('mouseover',()=>{
                            el.style.background='#efa2b4'; //to change
                            el.style.color='#cc185b'//to be changed
                            el.style.boxShadow="0 0 5px #ff4f8b, 0 0 25px #ff4f8b, 0 0 50px #ff4f8b, 0 0 200px #ff4f8b";//to be changed
                        })
                        el.addEventListener('mouseout',()=>{el.style.background=null;el.style.color='#2a7da2';el.style.boxShadow=null;})
                    })
                    document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>{
                        el.addEventListener('mouseover',()=>{
                            el.style.background='#1eff45';//'#2bd2ff';//'#1eff45'; ok//#03e9f4';
                            el.style.color='#003147'
                            el.style.boxShadow="0 0 5px #1eff45, 0 0 25px #1eff45, 0 0 50px #1eff45, 0 0 200px #2bd2ff";
                            //el.style.boxShadow="0 0 5px #03a9f4, 0 0 25px #03a9f4, 0 0 50px #03a9f4, 0 0 200px #03a9f4";
                        })
                        el.addEventListener('mouseout',()=>{el.style.background=null;el.style.color='#8cfa05';el.style.boxShadow=null;}) 
                    
                    })*/
                    document.querySelectorAll('.right-dashboard .about .opex-box2 .project-name h4').forEach(el=>{
                        el.addEventListener('mouseover',()=>{
                            el.style.background='linear-gradient(to left top,rgba(255,255,255,0.4),rgba(255,255,255,.8))'; 
                            el.style.color='#078dfa'
                            el.style.boxShadow="0 0 5px #61dbfb, 0 0 25px #61dbfb, 0 0 50px #61dbfb, 0 0 200px #61dbfb";
                        })
                        el.addEventListener('mouseout',()=>{el.style.background=null;el.style.color='#61dbfb';el.style.boxShadow=null;})
                    })
                }
            }
            if(_index==3){
                document.querySelector('.container .resume').style.background='linear-gradient(to right bottom,rgba(255,255,255,0.3),rgba(255,255,255,.1))';
                document.querySelector('.container .resume').style.borderRadius='2rem';
                document.querySelector('.container .resume .left-panel').style.background='linear-gradient(to right bottom,rgba(255,255,255,0.2),rgba(255,255,255,.1))';
                document.querySelector('.container .resume .left-panel').style.borderRadius='2rem';
                //#2a9fa3 #2aa3a1   #9ba603 #9ba32a
                document.querySelector('.resume .left-panel .profileTxt').style.color='#1f7a79'
                document.querySelector('.resume .left-panel .profileTxt span').style.color='#1f7a79'
                document.querySelector('.resume .left-panel .profileTxt .typing-text').style.color='#1f7a79'
                document.querySelectorAll('.resume .left-panel .title').forEach(el=>el.style.color='#107372')
                document.querySelectorAll('.resume .left-panel .text').forEach(el=>el.style.color='#000')
                document.querySelectorAll('.resume .left-panel h4').forEach(el=>el.style.color='#000')
                document.querySelectorAll('.left-panel .contact-info.education h5').forEach(el=>el.style.color='#2a7da2')
                document.querySelectorAll('.left-panel .contact-info.social ul li .text .network').forEach(el=>el.style.color='#1f8b8f')
                document.querySelectorAll('.left-panel .contact-info.social ul li .text a span').forEach(el=>el.style.color='#000')
                document.querySelectorAll('.left-panel .social .text a').forEach((el,i)=>{
                    el.addEventListener("mouseover",()=>{
                        document.querySelectorAll('.left-panel .social .text a span')[i].style.color='#fff'})
                    el.addEventListener("mouseout",()=>{
                        document.querySelectorAll('.left-panel .contact-info.social ul li .text a span')[i].style.color='#000'})
                });
            }
            
            //if(_index==4){document.querySelectorAll('.left-panel .contact-info.contact ul li .icon').forEach(el=>el.style.color='#000')}
            //else{}


            if(_index+1==themeColor.length){
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
            var styleElem6=document.head.appendChild(document.createElement("style"))
            var styleElem7=document.head.appendChild(document.createElement("style"))
            var styleElem8=document.head.appendChild(document.createElement("style"))
            if(_index==0||_index==3){
                styleElem1.innerHTML="#web:before{background:url('./images/btn-bg2.png')}"
                styleElem2.innerHTML="#github:before{background:url('./images/btn-bg2.png')}"
                styleElem3.innerHTML="#fb:before{background:url('./images/btn-bg2.png')}"
                styleElem4.innerHTML="#linkedin:before{background:url('./images/btn-bg2.png')}"
                styleElem5.innerHTML="#twitter:before{background:url('./images/btn-bg2.png')}"
                styleElem6.innerHTML=".right-dashboard .about .opex-box2 .text p:before{border:2px solid #2a7da2}"
                styleElem7.innerHTML=".right-dashboard .about .opex-box2 .text p:after{background:#2a7da2}"
                styleElem8.innerHTML='.left-panel .contact-info.contact ul li .icon:before{background:#003147}'
            }else if(_index==1){
                styleElem1.innerHTML="#web:before{background:url('./images/btn-bg1.png')}"
                styleElem2.innerHTML="#github:before{background:url('./images/btn-bg2.png')}"
                styleElem3.innerHTML="#fb:before{background:url('./images/btn-bg1.png')}"
                styleElem4.innerHTML="#linkedin:before{background:url('./images/btn-bg2.png')}"
                styleElem5.innerHTML="#twitter:before{background:url('./images/btn-bg1.png')}"
                styleElem6.innerHTML=".right-dashboard .about .opex-box2 .text p:before{border:2px solid #2a7da2}"
                styleElem7.innerHTML=".right-dashboard .about .opex-box2 .text p:after{background:#2a7da2}"
                styleElem8.innerHTML='.left-panel .contact-info.contact ul li .icon:before{background:#069c99}'//#0a9dcf ok #1af0de #078dfa
            }else if(_index==2||_index==5){
                styleElem1.innerHTML="#web:before{background:url('./images/btn-bg1.png')}"
                styleElem2.innerHTML="#github:before{background:url('./images/btn-bg1.png')}"
                styleElem3.innerHTML="#fb:before{background:url('./images/btn-bg2.png')}"
                styleElem4.innerHTML="#linkedin:before{background:url('./images/btn-bg2.png')}"
                styleElem5.innerHTML="#twitter:before{background:url('./images/btn-bg2.png')}"
                styleElem6.innerHTML=".right-dashboard .about .opex-box2 .text p:before{border:2px solid #2a7da2}"
                styleElem7.innerHTML=".right-dashboard .about .opex-box2 .text p:after{background:#2a7da2}"
                styleElem8.innerHTML='.left-panel .contact-info.contact ul li .icon:before{background:#436bb0}'//#7ea4e6 #0091ff
                if(_index==5){
                    styleElem8.innerHTML='.left-panel .contact-info.contact ul li .icon:before{background:#b01af0}'//#7300ff #a928e0 #7528e0
                    //#e319e0 #6a13d4
                }
            }
            else if(_index==4){
                styleElem1.innerHTML="#web:before{background:url('./images/btn-bg2.png')}"
                styleElem2.innerHTML="#github:before{background:url('./images/btn-bg2.png')}"
                styleElem3.innerHTML="#fb:before{background:url('./images/btn-bg2.png')}"
                styleElem4.innerHTML="#linkedin:before{background:url('./images/btn-bg2.png')}"
                styleElem5.innerHTML="#twitter:before{background:url('./images/btn-bg2.png')}"
                styleElem6.innerHTML=".right-dashboard .about .opex-box2 .text p:before{border:2px solid #61dbfb}" //#8cfa05 ok
                styleElem7.innerHTML=".right-dashboard .about .opex-box2 .text p:after{background:#61dbfb}" //#8cfa05 ok
                styleElem8.innerHTML='.left-panel .contact-info.contact ul li .icon:before{background:#078dfa}' //#7ffa05 ok
            }


            var myAudio=document.getElementById("my-audio")
            myAudio.pause();
            //myAudio.empty();
            var myAudioSrc=document.getElementById("my-audio-src")
            if(_index==0||_index==3){
                document.getElementById("my-audio-src").setAttribute('src', './audio/4204758801.mp3');
                //myAudioSrc.src='./audio/4204758801'
                myAudio.load();myAudio.volume=0.2;myAudio.play()
            }else if(_index==1||_index==5||_index==2){
                document.getElementById("my-audio-src").setAttribute('src', './audio/River Flows In You - 轻音乐网.mp3');
                //myAudioSrc.src='./audio/River Flows In You - 轻音乐网'
                myAudio.load();myAudio.volume=0.2;myAudio.play()
            }else{
                document.getElementById("my-audio-src").setAttribute('src', './audio/Eternal Hope.mp3');
                //myAudioSrc.src='./audio/4204758801./audio/Eternal Hope'
                myAudio.load();myAudio.volume=0.1;myAudio.play()
            }
        }))

        var type=new Typed('.typing-text',{
            strings:["","Electrical / Electronic Engineer","Nuclear Fuel Route Safety Case Engineer","interested in programming","applying for SWE job"],
            typeSpeed:120,
            loop:true
        })



document.getElementById('project1').addEventListener('click',()=>{
    //window.location="https://youtu.be/-Jo-zO5Rjbk"
    //location.href="https://youtu.be/-Jo-zO5Rjbk"
    window.open("https://youtu.be/-Jo-zO5Rjbk") //new window tab
})
document.getElementById('project3').addEventListener('click',()=>{window.open("https://youtu.be/qQCUvOpoZeI")})