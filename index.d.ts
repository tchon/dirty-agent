export as namespace dirty-agent;
export function parse_os(user_agent: string): Record<string, string>;
export function parse_browser(user_agent: string): Record<string, string>;
