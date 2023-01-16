import React from "react";
import './SidebarOptions.css';
import AddIcon from '@mui/icons-material/Add';

export default function SidebarOptions(){
    return(
        <div className="sidebarOptions">
            <div className="sidebarOption">
                <img src="https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg"
                alt="" />
                <p> 정장 입은 내 모습 </p>
            </div>

            <div className="sidebarOption">
                <img src="https://media.istockphoto.com/id/898963762/ko/%EC%82%AC%EC%A7%84/%EB%B8%94%EB%9E%99-%EB%B2%A8%ED%8A%B8-%ED%83%9C%EA%B6%8C%EB%8F%84-%EC%86%8C%EB%85%80.jpg?b=1&s=170667a&w=0&k=20&c=eyEFbeEYQjdPMFtGNYXi1VKnJmudBKarq-I5BXZyUxc="
                alt="" />
                <p> 격투기 </p>
            </div>

            <div className="sidebarOption">
                <img src="https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521__340.jpg"
                alt="" />
                <p> 자동차 </p>
            </div>

            <div className="sidebarOption">
                <img src="https://media.istockphoto.com/id/1367346498/ko/%EC%82%AC%EC%A7%84/%EC%95%BC%EA%B5%AC%EB%A5%BC-%EC%9E%A1%EC%95%84.jpg?b=1&s=170667a&w=0&k=20&c=NjqwsbxYSpQltoIVG86NNtUBdLlR-ftsNFavqWt8AgA="
                alt="" />
                <p> 야구 </p>
            </div>

            <div className="sidebarOption">
                <img src="https://cdn.pixabay.com/photo/2017/01/14/10/57/woman-1979272__340.jpg"
                alt="" />
                <p> 요리 </p>
            </div>

            <div className="sidebarOption">
                <img src="https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199__340.jpg"
                alt="" />
                <p> 축구 </p>
            </div>

            <div className="sidebarOption">
                <AddIcon />
                <p className="text">더보기</p>
            </div>
        </div>
    );
}