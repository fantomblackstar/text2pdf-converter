import { ReadableStream } from "stream/web";

import { generatePdf, postData } from "../api/actions";

Object.defineProperties(globalThis, {
  ReadableStream: { value: ReadableStream },
});

jest.mock("../api/actions", () => ({
  postData: jest.fn(),
  generatePdf: jest.fn(),
}));

describe("generatePdf", () => {
  beforeEach(() => {
    (postData as jest.Mock).mockResolvedValue({
      ok: true,
      body: new ReadableStream(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return undefined if response body is empty", async () => {
    (postData as jest.Mock).mockResolvedValue({
      ok: true,
      body: null,
    });

    const result = await generatePdf("Test PDF content");

    expect(result).toBeUndefined();
  });
});
