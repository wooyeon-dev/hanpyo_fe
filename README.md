# Hanpyo

Hanpyo renewal project

## 프로젝트 폴더 구조
```
- public
- src
    - __tests__
    - pages (페이지 단위 진입 컴포넌트)
        - Home.tsx
        - ....
    - components
        - common (공통)
            - modal.tsx
            - modal.scss
            - .....tsx
        - home (페이지하위 -> 불필요한 뎁스를 안만든다)
            - TodoList.tsx
            - TodoList.scss 
    - hooks (임시. 커스텀훅이 필요한 경우 다시 논의)
    - common (프로젝트 전반적으로 쓰이는 파일 -> 필요한 경우)
        - style (공통 스타일 파일)
        - @types
        - constants
        - utils
        - ....
    - api (API 구조가 정해지면 다시 논의)
    - store (store 구조 작업시 다시 논의)
```
