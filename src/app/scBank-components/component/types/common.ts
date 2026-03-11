/**
 * 제어 가능한 상태를 위한 옵션 인터페이스
 */
export interface ControllableStateOptions<T = boolean> {
  /** 외부에서 주입되는 현재 상태 값 (제어 모드) */
  value?: T;
  /** 초기 상태 값 (비제어 모드에서 사용) */
  defaultValue?: T;
  /** 상태가 변경될 때 호출되는 콜백 함수 */
  onChange?: (next: T) => void;
}
