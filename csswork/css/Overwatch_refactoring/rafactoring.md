.container .heroes에 줬던 속성 중,

`justify-content` 는 영웅 뭉태기의 가운데 정렬이 아니라,

영웅 박스들의 가운데 정렬이었음.

그리고 `max-width` 가 설정되어있는 경우, 작동되지 않는다고함.

뭉태기 자체를 가운데 정렬하기 위해서는

`margin: 0 auto` (위아래 여백없이 가로 중앙에 배치 )를 사용함.

박스에 이미지 넣을 때는 이미지 크기를 반드시 설정해줘야함.

box-sizing: border-box 해줘야하는 이유가뭐지?

box-sizing: border-box를 해줬더니 정렬이 더 잘되었다.. 왜일까 ?

같은 상자내에서 일정한 크기를 유지해서인가?

`box-sizing: border-box;`는 CSS의 속성 중 하나로, 박스의 크기를 계산하는 방식을 변경함. 이 속성을 사용하면 요소의 크기에 padding과 border가 포함됨. 기본값인 `box-sizing: content-box;`는 padding과 border가 크기에 추가x

32개의 박스가 정렬이 잘 된다는 것은 `box-sizing: border-box;`를 적용하면서 요소의 크기 계산이 변경되었기 때문. 

`box-sizing: border-box;`를 사용하면 박스의 크기가 정확하게 지정된 너비와 높이로 표시되므로, 레이아웃이 예상대로 잘 작동할 수 있다. 이는 특히 레이아웃을 설계하거나 반응형 디자인을 구현할 때 유용
