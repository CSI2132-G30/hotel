export function onChange(e: React.Dispatch<React.SetStateAction<any>>) {
    return ((event) => {
      e(event.target!.value);
    }) as React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  }