<!-- codex-summary:start -->
# ui5.walkthrough

The UI5 walkthrough application

## 구현 기능 요약

### App 화면

- 역할: 화면 정보 표시와 사용자 입력 처리

### Hello Dialog fragment 화면

- 역할: 업무 명령 실행
- 사용자 동작: 팝업 또는 화면 닫기 [onCloseDialog]

### Hello Panel 화면

- 역할: 조건 입력 및 값 선택, 상세 정보 표시·편집, 업무 명령 실행
- 사용자 동작: 상세 정보 열기 [onOpenDialog], 상세 정보 열기 [onShowHello]
- 처리 내용: 처리 결과와 오류 메시지를 사용자에게 안내; 팝업/다이얼로그를 열어 추가 입력이나 확인을 처리

### Invoice List 화면

- 역할: 목록 조회 및 항목 선택, 조건 입력 및 값 선택
- 사용자 동작: Filter Invoices [onFilterInvoices]
- 처리 내용: 검색 조건으로 목록을 필터링

## 실행 방법

```bash
npm install
npm start
```

<!-- codex-summary:end -->
