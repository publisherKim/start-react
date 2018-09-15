import React, { Component } from 'react';

class IterationSample extends Component {
  render() {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map(
      (name, index) => <li key={index}>{name}</li>
    );
    console.log('nameList', nameList);
    // 호 그냥 자바스크립트 맵의 배열의 반환값이랑은 다름 어떤 처리를 해준다는걸 알수있음 key나 react자체의 돔 처리등...
    return (
      <div>
        {nameList}
      </div>
      // 키가 없으면 경고 메세지 키가 있을 경우에 데이터와 돔간의 매치 등에서 훨씬 빠름
    );
  }
}

export default IterationSample;