export function titleReducer(title, type = 'heading-1', showAs = 'heading-1') {
  return {
    title: { text: title, type, showAs },
  };
}
