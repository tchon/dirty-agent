import { describe, it } from "node:test";
import assert from "node:assert";
import { is_valid_browser_ua, parse_os } from "./index.mjs";

describe("is_valid_browser_ua", () => {
  it("should test if user-agent follows convention", () => {
    const ua = "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko";

    assert.equal(is_valid_browser_ua(ua), true);
  });

  it("should fail if user-agent is non-standard", () => {
    const ua = "DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)";

    assert.equal(is_valid_browser_ua(ua), false);
  });
});

const USER_AGENTS = {
  windows: "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko",
  macbook: "Mozilla/5.0 (Macintosh; Intel Mac OS X 15_5_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.4 Safari/605.1.15",
  iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.4 Mobile/15E148 Safari/604.1",
  ipad: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.4 Mobile/15E148 Safari/604.1",
  huawei: "Mozilla/5.0 (Linux; Android 12; HBP-LX9 Build/HUAWEIHBP-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/99.0.4844.88 Mobile Safari/537.36",
  samsung: "Mozila/5.0 (Linux; Android 14; SM-S928B/DS) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.230 Mobile Safari/537.36",
  pixel: "Mozilla/5.0 (Linux; Android 14; Pixel 9 Build/AD1A.240411.003.A5; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/124.0.6367.54 Mobile Safari/537.36",
  motorola_moto_edge: "Dalvik/2.1.0 (Linux; U; Android 17; moto edge 30 neo Build/AP3A.241105.008)",
  playstation: "Mozilla/5.0 (PlayStation 4 3.11) AppleWebKit/537.73 (KHTML, like Gecko)",
  xbox: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox Series X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36 Edge/20.02",
};

describe("parse_os", () => {
  it("should parse Windows", () => {
    const ua = USER_AGENTS.windows;
    const out = parse_os(ua);

    assert.equal(out.os, "Windows NT");
    assert.equal(out.os_version, "10.0");
  });

  it("should parse Macbook", () => {
    const ua = USER_AGENTS.macbook;
    const out = parse_os(ua);

    assert.equal(out.os, "Intel Mac OS X");
    assert.equal(out.os_version, "15_5_3");
  });

  it("should parse iPhone", () => {
    const ua = USER_AGENTS.iphone
    const out = parse_os(ua);

    assert.equal(out.os, "CPU iPhone OS");
    assert.equal(out.os_version, "18_5");
  });

  it("should parse iPad", () => {
    const ua = USER_AGENTS.ipad;
    const out = parse_os(ua);

    assert.equal(out.os, "CPU iPhone OS");
    assert.equal(out.os_version, "18_3");
  });

  it("should parse Huawei", () => {
    const ua = USER_AGENTS.huawei;
    const out = parse_os(ua);

    assert.equal(out.os, "Android");
    assert.equal(out.os_version, "12");
  });

  it("should parse Samsung", () => {
    const ua = USER_AGENTS.samsung;
    const out = parse_os(ua);

    assert.equal(out.os, "Android");
    assert.equal(out.os_version, "14");
  });

  it("should parse Pixel", () => {
    const ua = USER_AGENTS.pixel;
    const out = parse_os(ua);

    assert.equal(out.os, "Android");
    assert.equal(out.os_version, "14");
  });

  it("should parse Motorola Moto Edge", () => {
    const ua = USER_AGENTS.motorola_moto_edge;
    const out = parse_os(ua);

    assert.equal(out.os, "Android");
    assert.equal(out.os_version, "17");
  });

  it("should parse Playstation", () => {
    const ua = USER_AGENTS.playstation;
    const out = parse_os(ua);

    assert.equal(out.os, "PlayStation 4");
    assert.equal(out.os_version, "3.11");
  });

  it("should parse Xbox", () => {
    const ua = USER_AGENTS.xbox;
    const out = parse_os(ua);

    assert.equal(out.os, "Windows NT");
    assert.equal(out.os_version, "10.0");
  });
});
