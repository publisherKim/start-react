import React, { Component } from 'react';

class IterationSample extends Component {
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleInsert = () => {
    // push is not working 아마도 상수의 개념에 정확히 적용하기 위해 카피된 객체를 쓰라고 지시하는것 같다.
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ''
    })
  }

  handleRemove(index) {
    const { names } = this.state;
    // 로직은 여러개인데 여기서는 선택한 요소를 제외하고 앞뒤로 전개연산자를 통해 다시 세팅
    // this.setState({
    //   names: [...names.slice(0, index), ...names.slice(index + 1, names.length)]
    // })
    
    // filter를 통해 작성하는 로직
    this.setState({
      names: names.filter((item, i) => i !== index)
    })
  }

  render() {
    const nameList = this.state.names.map(
      (name, index) => (
        // render method는 pure function을 써야한다는데 이유는 잘 모르겠다.
        // https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f
        // 애로우 함수를 통해서 실행해야만 하는가 ? 그냥 바로 실행은 안되게 막은 이유
        // this와 관계됨 bind해줘서 써야함
        <li
          key={index}
          onDoubleClick={() => this.handleRemove(index)}
        >
          {name}
        </li>
      )
    );
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.name}
        />
        <button onClick={this.handleInsert}>추가</button> 
        <ul>
          {nameList}
        </ul>
      </div>
    );
  }
}

export default IterationSample;