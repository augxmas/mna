export type ListingType = '부동산' | '법인';

export interface Listing {
  id: number;
  type: ListingType;
  title: string;
  location: string;
  district: string;
  price: number;
  priceLabel: string;
  metric: string;
  tags: string[];
  image: string;
  description: string;
  verified: boolean;
  lat: number;
  lng: number;
}

export const listings: Listing[] = [
  { id: 1, type: '부동산', title: '통로 프라임 레지던스', location: 'Bangkok · Thong Lo', district: '통로', price: 18500000, priceLabel: '฿18.5M', metric: '2 Beds · 86㎡', tags: ['외국인 소유 가능', 'BTS 6분'], image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85', description: '통로 중심의 신축 프리미엄 레지던스입니다. 안정적인 임대 수요와 뛰어난 생활 인프라를 갖췄습니다.', verified: true, lat: 13.7306, lng: 100.5797 },
  { id: 2, type: '부동산', title: '아속 스카이라인 콘도', location: 'Bangkok · Asok', district: '아속', price: 12300000, priceLabel: '฿12.3M', metric: '1 Bed · 54㎡', tags: ['고층 시티뷰', 'MRT 4분'], image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85', description: '아속 업무지구를 내려다보는 고층 콘도입니다. 직접 거주와 임대 투자 모두에 적합합니다.', verified: true, lat: 13.7372, lng: 100.5603 },
  { id: 3, type: '부동산', title: '사톤 가든 빌라', location: 'Bangkok · Sathorn', district: '사톤', price: 42000000, priceLabel: '฿42M', metric: '4 Beds · 320㎡', tags: ['프라이빗 풀', '리노베이션 완료'], image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85', description: '조용한 사톤 주거지의 독립형 풀빌라입니다. 법인 임원 주거 및 장기 투자에 알맞습니다.', verified: true, lat: 13.7198, lng: 100.5299 },
  { id: 4, type: '부동산', title: '에까마이 부티크 오피스', location: 'Bangkok · Ekkamai', district: '에까마이', price: 29700000, priceLabel: '฿29.7M', metric: 'Office · 410㎡', tags: ['통건물', '주차 8대'], image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', description: '크리에이티브 기업에 어울리는 4층 규모의 부티크 오피스입니다. 즉시 입주 가능합니다.', verified: true, lat: 13.7262, lng: 100.5851 },
  { id: 5, type: '부동산', title: '짜오프라야 리버 펜트하우스', location: 'Bangkok · Charoen Krung', district: '짜런끄룽', price: 68000000, priceLabel: '฿68M', metric: '3 Beds · 215㎡', tags: ['리버뷰', '프라이빗 엘리베이터'], image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85', description: '짜오프라야강 파노라마를 감상할 수 있는 희소성 높은 펜트하우스입니다.', verified: true, lat: 13.7087, lng: 100.5144 },
  { id: 6, type: '법인', title: '아리 스페셜티 커피 브랜드', location: 'Bangkok · Ari', district: '아리', price: 7800000, priceLabel: '฿7.8M', metric: '매장 3개 · 직원 18명', tags: ['EBITDA 22%', '운영 6년'], image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85', description: '충성 고객층을 보유한 스페셜티 커피 브랜드로, 주요 상권에 직영점 3곳을 운영합니다.', verified: true, lat: 13.7798, lng: 100.5445 },
  { id: 7, type: '법인', title: '수쿰윗 프리미엄 스파', location: 'Bangkok · Phrom Phong', district: '프롬퐁', price: 12600000, priceLabel: '฿12.6M', metric: '지점 2개 · 직원 26명', tags: ['관광객 매출 65%', '브랜드 포함'], image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85', description: '호텔 제휴와 온라인 예약 채널이 안정적으로 구축된 프리미엄 웰니스 브랜드입니다.', verified: true, lat: 13.7301, lng: 100.5696 },
  { id: 8, type: '법인', title: '방콕 라스트마일 물류사', location: 'Bangkok · Bang Na', district: '방나', price: 34000000, priceLabel: '฿34M', metric: '차량 42대 · 직원 58명', tags: ['B2B 계약 14건', '흑자 운영'], image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85', description: '동부경제회랑과 방콕 도심을 연결하는 라스트마일 물류 전문 기업입니다.', verified: true, lat: 13.6682, lng: 100.6347 },
  { id: 9, type: '법인', title: '태국 비건 푸드 제조사', location: 'Bangkok · Lat Krabang', district: '랏끄라방', price: 28500000, priceLabel: '฿28.5M', metric: '공장 1개 · SKU 24종', tags: ['FDA 인증', '수출 매출 31%'], image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85', description: '태국 내 주요 리테일 채널과 수출망을 확보한 성장 단계의 비건 식품 제조사입니다.', verified: true, lat: 13.7279, lng: 100.7485 },
  { id: 10, type: '법인', title: '실롬 B2B 소프트웨어사', location: 'Bangkok · Silom', district: '실롬', price: 52000000, priceLabel: '฿52M', metric: 'ARR ฿21M · 직원 32명', tags: ['SaaS', '갱신율 91%'], image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85', description: '호텔과 리테일 고객을 대상으로 운영 솔루션을 제공하는 B2B SaaS 기업입니다.', verified: true, lat: 13.7248, lng: 100.5257 }
];

export const closedDeals = [
  { id: 101, name: 'Pattaya Azure Hotel', nameKo: '파타야 아주르 호텔', price: '฿145M', date: '2026. 06', rooms: '72 Rooms', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85', quote: '현지 실사부터 계약 이전까지 한 팀이 관리해 주어 안심할 수 있었습니다.', author: 'K사 투자총괄 김○○', rating: 5 },
  { id: 102, name: 'Jomtien Bay Resort', nameKo: '좀티엔 베이 리조트', price: '฿210M', date: '2026. 03', rooms: '108 Rooms', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85', quote: '숫자로 확인되는 정보만 제공해 의사결정이 빨랐습니다.', author: 'P캐피탈 이○○ 대표', rating: 5 },
  { id: 103, name: 'Pratumnak Hideaway', nameKo: '프라툼낙 하이드어웨이', price: '฿89M', date: '2025. 11', rooms: '44 Rooms', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85', quote: '비공개 매물의 가치와 리스크를 균형 있게 설명해 주었습니다.', author: '개인 투자자 박○○', rating: 5 }
];
