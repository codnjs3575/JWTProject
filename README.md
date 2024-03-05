# JWT Project

---

## 프로젝트 부제

JWT(Json Web Token)를 활용한 로그인 프로젝트

---

## 프로젝트 설명

React Native와 Spring Boot를 활용하여 JWT를 통한 사용자 인증을 구현하는 프로젝트

---

## 프로젝트 기간

2024/03/05 ~ 03/15

---

## 팀원 소개

FrontEnd : 김채원
<br>
BackEnd : 정태현

---

## 기술 스택

**FrameWork** : React Natvie (expo) 50.0.8 / Spring Boot 3.2.3
**언어** : Java17, JDK17, JavaScript

---

## 개발 환경

**OS** : MacOS Sonoma 14.0 Apple M1, Window 11
**IDE** : VSCode , IntelliJ

---

## 기능 설명

일단, 리프레시 토큰을 사용한다는 것은 서버가 인증 완료 시 다음과 같은 두 종류의 토큰을 발급한다는 것을 의미한다.

액세스 토큰(Access Token) : 우리가 지금까지 다룬, 인가가 필요한 요청에 실어 서버에게 전송하는 토큰을 의미한다. 즉, 현재 로그인된 사용자의 상태를 기억하며 로그인 상태 유지 및 권한 검사를 위해 사용되는 토큰이다.
리프레시 토큰(Refresh Token) : 이미 발급받은 액세스 토큰을 다시 발급받기 위해 서버에게 전송하는 토큰을 의미한다. 말 그대로 액세스 토큰을 갱신(Refresh)하는 것이다

---
