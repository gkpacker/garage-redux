export const required = value => (value ? undefined : "Required");
export const plateFormat = value => (/[A-Z]/.test(value) ? undefined : "Must be all caps and doesn't include special characteres");
