export function is_valid_browser_ua(user_agent) {
  if (typeof user_agent !== "string") {
    return false;
  }
  return user_agent.startsWith('Mozilla/');
}

const REGEX = {
  OS: /^[A-Z]\w+\W+\d+\.\d+(?:\.\d+)?\s+\((?:\w+;\s+(?:\w+;\s+)?)?(\w[^;\)]+)\s+(\d+(?:[_\.]\d[_\.\d]*)?)\b/,
  SAFARI: /\b(?:Mac|iPhone|iPad).*\s+Version\/(\d+\.\d+(?:\.\d+)?)\s+((?:[A-Z]\w+\/\w+\s+)?Safari)/i,
  FIREFOX: /\bGecko\W+(?:\d[\d\.]*\s+)?(F\w+)\/(\d[\.\d]+)\b/i,
};

export function parse_os(user_agent) {
  if (typeof user_agent === "string") {
    const matches = user_agent.match(REGEX.OS);
    if (matches) {
      return { os: matches[1], os_version: matches[2] };
    }
  }
  return { os: "unknown", os_version: "unknown" };
}

export function parse_browser(user_agent) {
  if (typeof user_agent === "string") {
    let matches = user_agent.match(REGEX.SAFARI);
    if (matches) {
      return { browser_name: matches[2], browser_version: matches[1] };
    }
    matches = user_agent.match(REGEX.FIREFOX);
    if (matches) {
      return { browser_name: matches[1], browser_version: matches[2] };
    }
  }
  return { os: "unknown", os_version: "unknown" };
}
