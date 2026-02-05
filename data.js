// ========================================
// 상품 데이터 - 새 상품 추가 시 아래 배열에 객체 추가
// ========================================

const products = [
    {
        id: 1,
        slug: "newcrete-fr",  // URL용 슬러그
        name: "폴리우레탄 레진몰탈 : 뉴크리트",
        subtitle: "식품공장 바닥보수용(초속경,고강도), 물류창고, 저온창고",
        description: `- 트렌치주위, 판넬이설부위, 파이거나 크랙부위 등\n- 다양한 칼라 레진 몰탈\n- 식품공장, 조리실 전용바닥재 (HACCP 승인)`,
        image: "images/newcrete-1.png",
        tags: ["다양한 색상", "바닥보수", "HACCP 승인", "초속경", "고강도", "본사 생산", "식품공장", "물류창고"],
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
