import { useState, useEffect } from 'react';
import './CatPage.css';

export default function CatPage() {
  const cats = ['😺', '😸', '😹', '😻', '😼', '😽', '😾', '😿', '🙀', '🐱'];
  const facts = [
    '고양이의 청각은 인간의 64배까지 뛰어나답니다!',
    '고양이는 하루에 평균 70%의 시간을 자면서 보냅니다.',
    '고양이의 발바닥은 매우 민감해서 감정을 표현합니다.',
    '고양이는 180도 이상 회전할 수 있는 유연한 척추뼈를 가지고 있습니다.',
    '고양이의 울음은 25가지 이상의 다양한 종류가 있습니다.',
    '고양이는 인간과 달리 단맛을 감지하지 못합니다.',
    '고양이의 수염은 매우 민감한 감각기관입니다.',
    '고양이는 수직으로 6배 이상 점프할 수 있습니다.'
  ];

  const [currentCat, setCurrentCat] = useState('😺');
  const [currentFact, setCurrentFact] = useState(0);
  const [message, setMessage] = useState('');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    changeCat();
  }, []);

  const changeCat = () => {
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    setCurrentCat(randomCat);
    showMessage('고양이가 변경되었습니다!');
  };

  const showFact = () => {
    setCurrentFact((prev) => (prev + 1) % facts.length);
    showMessage('흥미로운 사실을 알았어요!');
  };

  const playSound = () => {
    showMessage('🔊 야옹! 야옹!');
  };

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
    showMessage(isPaused ? '애니메이션 재생!' : '애니메이션 일시정지!');
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="container">
      <h1>🐱 귀여운 고양이 🐱</h1>

      <div className="cat-image">
        <span className={`cat-emoji ${isPaused ? 'paused' : ''}`}>
          {currentCat}
        </span>
      </div>

      <div className="cat-facts">
        <h2>고양이 재미있는 사실</h2>
        <p>{facts[currentFact]}</p>
      </div>

      <div className="buttons">
        <button onClick={changeCat}>고양이 변경</button>
        <button onClick={showFact}>사실 보기</button>
        <button onClick={playSound}>고양이 소리</button>
        <button onClick={toggleAnimation}>
          {isPaused ? '▶️ 재생' : '⏸️ 일시정지'}
        </button>
      </div>

      {message && <div className="message">{message}</div>}
    </div>
  );
}