import React from "react";
import './Login.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Login(){
    return(
        <div className="login">
            <div className="login_container">
                <div className="login_logo">
                    <img src = "https://cdn.pixabay.com/photo/2021/09/11/12/17/quora-6615448__340.png"
                    alt="" />
                </div>

                <div className="login_desc">
                    <p> 리액트를 통해 세상을 구축해보자 </p>
                    <h3> react html javascript typescript css </h3>
                </div>

                <div className="login_auth">
                    <div className="login_authOptions">
                        <div className="login_authOption">
                            <img className="login_googleAuth"
                            src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004__340.png"
                            alt="" />
                            <p> 구글아이디로 로그인</p>
                        </div>

                        <div className="login_authOption">
                            <img className="login_googleAuth"
                            src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746__340.png"
                            alt="" />
                            <p> facebook으로 로그인</p>
                        </div>

                        <div className="login_authDesc">
                            <p>
                                <span style={ {color : 'blue', cursor: 'pointer'}}>
                                    이메일로 회원가입
                                </span>
                                시 본사의
                            <p>
                            <span style={{color: "blue", cursor: "pointer"}}>
                                    개인정보정책{" "}
                            </span>
                            </p>
                                과 {" "}
                                <span style={{color: "blue", cursor: "pointer"}}>
                                    서비스 제공 정책
                                </span>
                                에 동의하는 것으로 간주합니다
                            </p>
                        </div>
                    </div>

                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4> 로그인 </h4>
                        </div>


                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input type="text" placeholder="이메일" />
                            </div>

                            <div className="login_inputField">
                                <input type="password" placeholder="비밀번호" />
                            </div>
                        </div>

                        <div className="login_forgButt">
                            <small> 비밀번호 찾기</small>
                            <button>로그인</button>
                        </div>

                        <button>회원가입</button>
                    </div>
                </div>

                <div className="login_lang">
                    <p> 언어 설정 </p>
                    <ArrowForwardIosIcon fontSize="small" />
                </div>

                <div className="login_footer">
                    <p>About</p>
                    <p>오시는길</p>
                    <p>비지니스문의</p>
                    <p>근성과끈기</p>
                    <p>구독과좋아요!!</p>
                    <p>&copy; 리액트 깎는 백수</p>
                </div>
            </div>
        </div>
    );
}