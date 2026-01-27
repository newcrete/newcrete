// ========================================
// 상품 데이터 - 새 상품 추가 시 아래 배열에 객체 추가
// ========================================

const products = [
    {
        id: 1,
        slug: "newcrete-fr",  // URL용 슬러그
        name: "뉴크리트 FR",
        subtitle: "학교급식실 전용 논슬립 바닥재",
        description: `3액형 수용성 우레탄 레진몰탈과 칼라규사가 최적상태로 혼합되고 내화학성 및 내구성이 강한 논슬립 바닥재`,
        image: "images/newcrete-fr.png",
        tags: ["HACCP인증", "논슬립", "학교급식실"],
        featured: true
    },
    // ========================================
    // 새 상품 추가 예시:
    // ========================================
    // {
    //   id: 2,
    //   slug: "newcrete-hd",
    //   name: "뉴크리트 HD",
    //   subtitle: "고내구성 산업용 바닥재",
    //   description: "설명",
    //   image: "images/newcrete-hd.png",
    //   tags: ["고내구성", "산업용"],
    //   featured: false
    // },
];

// ========================================
// 연락처 정보 - 수정 가능
// ========================================

const contactInfo = {
    phone: "053-526-5900",
    // 카카오톡 채널 URL (나중에 추가)
    // 예시: "https://pf.kakao.com/_xYourID"
    kakaoUrl: null,
    // 카카오톡 채널명 (버튼에 표시)
    kakaoName: "카카오톡 문의",
    // 회사 정보
    companyName: "NEWCRETE",
    companySlogan: "Flooring System NEWCRETE",
};
