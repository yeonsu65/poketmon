window.addEventListener('load', () =>{
  // 배치할 요소를 감싸고 있는 부모 요소명
  const grid = new Isotope('section',{
    itemSelector:'article', //배치할 요소
    columnWidth: 'article', //너비값을 구할 요소명
    transitionDuration:'0.5s' // 화면 재배치 시 요소가 움직이는 시간
  });

  const btns =document.querySelectorAll('main ul li');
  for(let el of btns){
    // 각 버튼에 클릭 이벤트 연결
    el.addEventListener('click', (e) =>{
      e.preventDefault();
      // 변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값저장
      const sort = e.currentTarget.querySelector('a').getAttribute('href');
      console.log(sort);

      // grid에 결과값으로 재정렬 기능
      grid.arrange({
        filter : sort
      });
    });
  }
});