export const streamToBlob = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Blob> => {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    if (value) {
      chunks.push(value);
    }
    done = doneReading;
  }

  return new Blob(chunks, { type: "application/pdf" });
};
