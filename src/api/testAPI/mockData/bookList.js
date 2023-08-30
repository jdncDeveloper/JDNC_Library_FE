const mockBookList = [
  {
    borrowId: 1,
    bookNumber: '001',
    bookGroup: 'T',
    title: '한 권으로 읽는 컴퓨터 구조와 프로그래밍',
    author: '조너선 스타인하트',
    publisher: '책만',
    image:
      'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fimage.kyobobook.co.kr%2Fimages%2Fbook%2Fxlarge%2F707%2Fx9781593279707.jpg&type=a340',
    borrowedData: '2023.08.01',
    borrowedStatus: true,
    content:
      '책 소개입니다. 이 책은 한권으로 끝내는 컴퓨터 구조와 프로그래밍의 내용을 담고 있습니다.',
  },
  {
    borrowId: 2,
    bookNumber: '002',
    bookGroup: 'T',
    title: '코딩 자율학습 HTML + CSS + 자바스크립트',
    author: '김기수',
    publisher: '길벗',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MTJfNzYg%2FMDAxNjU1MDMzNzA5OTY5.UUuW-60Pgb3p4hfsGXT6PRVJYBj6ZSxiJlXKYffSfRUg.sVn-gAiWyzJ7gs94k2UfY-CHdZZamNIfCcLA_jMBCekg.JPEG.kgbdiy%2F%25C4%25DA%25B5%25F9%25C0%25DA%25C0%25B2%25C7%25D0%25BD%25C0HTML%252BCSS%252B%25C0%25DA%25B9%25D9%25BD%25BA%25C5%25A9%25B8%25B3%25C6%25AE_img01.jpg&type=a340',
    borrowedData: '2023.08.01',
    borrowedStatus: false,
    content: '책 소개입니다. 이 책은 코딩 자율학습의 내용을 담고 있습니다.',
  },
  {
    borrowId: 3,
    bookNumber: '003',
    bookGroup: 'A',
    title: '모던 자바스크립트 Deep Dive',
    author: '이웅모',
    publisher: '위키북스',
    image:
      'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fimage.aladin.co.kr%2Fscm%2Feditor%2F2022%2F0207%2Fscm3975573553085.jpg&type=a340',
    borrowedData: '2023.08.01',
    borrowedStatus: true,
    content: '책 소개입니다. 이 책은 모던 자바스크립트의 내용을 담고 있습니다.',
  },
];

export default mockBookList;
