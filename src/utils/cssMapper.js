export function mapClasses(styles, classString) {
  if (!classString) return '';
  // If classString is not a string (e.g., undefined), return empty.
  const resolved = typeof classString === 'string' ? classString : String(classString);
  return resolved
    .split(/\s+/)
    .filter(Boolean)
    .map((cn) => (styles && styles[cn] ? styles[cn] : cn))
    .join(' ');
}

export default mapClasses;

