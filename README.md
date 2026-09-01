# SIAM DEAL POC

태국 부동산·법인 M&A 거래 플랫폼의 최종 사용자용 데모입니다.

## 실행

```bash
npm install
npm run dev
```

`http://localhost:5173`에서 확인할 수 있습니다.

## 포함 범위

- 방콕 부동산 5건 / 법인 5건 검색 및 분류
- 매물 상세, 관심 매물, 문의 인터랙션
- 매물별 Google 지도 임베드
- 파타야 호텔 성사 사례 3건과 후기
- 매도인 등록 → 중개인 검토 → 공개 → 문의 흐름 안내
- MySQL 초기 데이터 모델 (`database/schema.sql`)

현재 POC의 데이터와 문의 동작은 브라우저 내 더미입니다. 다음 단계에서 Node.js API와 MySQL에 연결할 수 있도록 타입과 스키마를 분리했습니다.
