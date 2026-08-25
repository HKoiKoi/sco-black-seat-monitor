import Swal, { type SweetAlertIcon, type SweetAlertResult } from "sweetalert2";

// 공통 토스트(Toast) 알림 설정
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const swalUtils = {
  // 1. 우측 상단 토스트 알림 (예: "좌석 이동이 완료되었습니다.")
  toast: (title: string, icon: SweetAlertIcon = "success") => {
    return Toast.fire({
      icon,
      title,
    });
  },

  // 2. 일반 안내 모달 (예: "DB 파일 연동 오류")
  alert: (title: string, text: string, icon: SweetAlertIcon = "info") => {
    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "확인",
      confirmButtonColor: "#3085d6",
    });
  },

  // 3. 사용자 확인 모달 (예: 라운지존 드래그 앤 드롭 시 이동 확인용)
  confirm: (title: string, text: string): Promise<SweetAlertResult> => {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    });
  },
};
