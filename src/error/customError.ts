// 필수 파라미터 누락
export const requiredParam = (obj: any, req: any) => {
  return new Error();
};

export default { requiredParam };
