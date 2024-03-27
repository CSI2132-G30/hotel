export function onChange(e: React.Dispatch<React.SetStateAction<string>>) {
    return ((event) => {
      e(event.target!.value);
    }) as React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  }