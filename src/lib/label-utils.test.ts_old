import { expect, test, describe } from "bun:test";
import { getLabelForId, FRESHMAN_LABEL } from "./label-utils";

describe("getLabelForId", () => {
  test("既存のラベルがあればそれを返すこと", () => {
    const labels = { "123": "実行委員" };
    expect(getLabelForId("123", labels)).toBe("実行委員");
  });

  test("126から始まるIDの場合は新入生タグを返すこと", () => {
    const labels = {};
    expect(getLabelForId("1260001", labels)).toBe(FRESHMAN_LABEL);
  });

  test("126から始まるIDで、かつ既存のラベルがあっても、既存のラベルを優先すること", () => {
    const labels = { "1260002": "特待生" };
    expect(getLabelForId("1260002", labels)).toBe("特待生");
  });

  test("126から始まらない、かつラベルが未登録の場合は空文字を返すこと", () => {
    const labels = {};
    expect(getLabelForId("1259999", labels)).toBe("");
  });
});
