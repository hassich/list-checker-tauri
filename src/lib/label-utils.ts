export const FRESHMAN_ID_PREFIX = "126";
export const FRESHMAN_LABEL = "新入生";

export function getLabelForId(id: string, labels: Record<string, string> | null | undefined): string {
  if (labels && labels[id]) {
    return labels[id];
  }
  if (id && id.startsWith(FRESHMAN_ID_PREFIX)) {
    return FRESHMAN_LABEL;
  }
  return "";
}
