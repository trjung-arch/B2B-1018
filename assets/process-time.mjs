// Event timestamps are stored independently so later edits cannot change history.
export function formatDateTime(value) {
  if (!value) return "일시 미기록";
  const match = String(value).match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})(?::(\d{2}))?$/);
  if (match) return `${match[1]} ${match[2]}:${match[3] || "00"}`;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "일시 미기록";
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"
  }).format(date);
}

export const nowDateTime = () => formatDateTime(new Date().toISOString());

export function processTimes(request) {
  const saved = request.processTimes || {};
  return {
    1: request.createdAt,
    2: request.quotation?.sentAt || (request.status === "견적 발송" ? request.updatedAt : null),
    3: request.quotation?.approvedAt || (request.status === "견적 승인완료" ? request.updatedAt : null),
    4: request.workOrderedAt || (request.status === "결제완료/작업진행" ? request.updatedAt : null),
    ...saved
  };
}

export function recordProcessTime(request, step, time) {
  const times = processTimes(request);
  if (step && !times[step]) times[step] = time;
  return times;
}

export function processTimeLabel(request, step) {
  const time = step === 4 && request.status === "상담 완료" ? request.shippedAt || request.updatedAt : processTimes(request)[step];
  if (time) return formatDateTime(time);
  const current = {"접수완료":1,"컨설턴트 배정":1,"시안 제작중":1,"견적 발송":2,
    "견적 승인완료":3,"입금확인요청":3,"결제완료/작업진행":4,"상담 완료":4}[request.status] || 0;
  return step > current ? "진행 대기" : "일시 미기록";
}
