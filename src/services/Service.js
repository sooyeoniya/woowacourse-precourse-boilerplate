import Domain from '../domains/Domain.js';

// 여러 도메인 정보들을 조인하여 비즈니스 로직 구현
class Service {
  /** @type {Domain} */ #domain;
  #serviceInfo;

  constructor(domainInstance) {
    this.#domain = domainInstance;
    this.#initServiceInfo();
  }

  // 서비스 정보 반환
  getServiceInfo() {
    return this.#serviceInfo;
  }

  #initServiceInfo() {
    // 서비스 정보 초기화
  }
}

export default Service;
