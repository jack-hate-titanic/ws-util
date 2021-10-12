/*
 * @Author: ws
 * @Date: 2021-10-07 09:37:43
 * @LastEditors: ws
 * @LastEditTime: 2021-10-07 09:42:21
 * @Description:
 */

const instanceOf = require("../modules/instanceof");

test("instanceOf ", () => {
  expect(instanceOf([], Array)).toBe(true);
});
