export function is_valid_browser_ua(user_agent) {
  if (typeof user_agent !== "string") {
    return false;
  }
  return user_agent.startsWith('Mozilla/');
}

const OS_REGEX = /^[A-Z]\w+\W+\d+\.\d+(?:\.\d+)?\s+\((?:\w+;\s+(?:\w+;\s+)?)?(\w[^;\)]+)\s+(\d+(?:[_\.]\d[_\.\d]*)?)\b/;

export function parse_os(user_agent) {
  if (typeof user_agent === "string") {
    const matches = user_agent.match(OS_REGEX)
    if (matches) {
      return { os: matches[1], os_version: matches[2] };
    }
  }
  return { os: "unknown", os_version: "unknown" };
}
